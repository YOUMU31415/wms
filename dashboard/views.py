from rest_framework import viewsets
from asn.models import AsnDetailModel
from dn.models import DnDetailModel
from asn import serializers as asnserializers
from dn import serializers as dnserializers
from utils.page import MyPageNumberPagination
from utils.datasolve import sumOfList
from utils.fbmsg import FBMsg
from utils.md5 import Md5
from rest_framework.filters import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response
from asn.filter import AsnDetailFilter
from dn.filter import DnDetailFilter
from rest_framework.exceptions import APIException
from django.shortcuts import render
from dateutil.relativedelta import relativedelta
from django.db.models.functions import TruncMonth,TruncYear,ExtractDay,ExtractMonth
from django.db.models import Count
from django.db import connection
from django.db.models import Q
from django.db.models import Sum
import re
from django.utils import timezone
from goods.models import ListModel
from customer.models import ListModel as CustModel
import datetime as dt

class ReceiptsViewSet(viewsets.ModelViewSet):
    """
        list:
            Response a data list（all）
    """
    pagination_class = None
    filter_backends = [DjangoFilterBackend, OrderingFilter, ]
    ordering_fields = ['id', "create_time", "update_time", ]
    filter_class = AsnDetailFilter

    def get_project(self):
        try:
            id = self.kwargs.get('pk')
            return id
        except:
            return None

    def get_queryset(self):
        id = self.get_project()
        if self.request.user:
            if id is None:
                return AsnDetailModel.objects.filter(openid=self.request.auth.openid, asn_status__gte=4,
                                                     create_time__gte=timezone.now().date() - relativedelta(days=14),
                                                     is_delete=False)
            else:
                return AsnDetailModel.objects.filter(openid=self.request.auth.openid, asn_status__gte=4,
                                                     create_time__gte=timezone.now().date() - relativedelta(days=14),
                                                     id=id, is_delete=False)
        else:
            return AsnDetailModel.objects.none()

    def get_serializer_class(self):
        if self.action in ['list']:
            return asnserializers.ASNDetailGetSerializer
        else:
            return self.http_method_not_allowed(request=self.request)

    def notice_lang(self):
        lang = self.request.META.get('HTTP_LANGUAGE')
        return lang

    def list(self, request, *args, **kwargs):
        qs = self.get_queryset()
        context = {}
        dataset = {}
        dimensions = ['product']
        source = []
        series = []
        bar_charts = {
            "type": 'bar',
            "barWidth": '4%',
            "barGap": '60%',
            "barCategoryGap": '10%',
            "itemStyle": {
              "normal": {
                "label": {
                  "show": "true",
                  "position": "top"
                }
              }
            }
          }
        receipt_res = qs.annotate(month=ExtractMonth('create_time'), day=ExtractDay('create_time')) \
            .values('month', 'day').order_by('month', 'day').annotate(number=Sum('goods_cost'))
        # qty_res = qs.values('goods_code').order_by('goods_code').annotate(number=Sum('goods_qty'))
        # rank_res = qs.values('goods_code').order_by('goods_code').annotate(number=Sum('goods_cost'))
        receipt_res_dict = {
        }
        # qty_res_dict = {
        # }
        # rank_res_dict = {
        # }
        for i in receipt_res:
            series.append(bar_charts)
            dimensions.append("%s-%s" % (i['month'], i['day']))
            receipt_res_dict.update({"%s-%s" % (i['month'], i['day']): round(i['number'], 2)})
        # for i in qty_res:
        #     qty_res_dict.update({i['goods_code']: i['number']})
        # for i in rank_res:
        #     rank_res_dict.update({i['goods_code']: i['number']})
        source.append(receipt_res_dict)
        # data_list.append(qty_res_dict)
        # data_list.append(rank_res_dict)
        dataset['source'] = source
        dataset['dimensions'] = dimensions
        context['dataset'] = dataset
        context['series'] = series
        return Response(context)

class SalesViewSet(viewsets.ModelViewSet):
    """
        list:
            Response a data list（all）
    """
    pagination_class = None
    filter_backends = [DjangoFilterBackend, OrderingFilter, ]
    ordering_fields = ['id', "create_time", "update_time", ]
    filter_class = DnDetailFilter

    def get_project(self):
        try:
            id = self.kwargs.get('pk')
            return id
        except:
            return None

    def get_queryset(self):
        print("run a")
        id = self.get_project()
        if self.request.user:
            print(id)
            if id is None:
                return DnDetailModel.objects.filter(openid=self.request.auth.openid, dn_status__gte=4,
                                                    create_time__gte=timezone.now().date() - relativedelta(year=3),
                                                    is_delete=False)
            else:
                return DnDetailModel.objects.filter(openid=self.request.auth.openid, dn_status__gte=4,
                                                    create_time__gte=timezone.now().date() - relativedelta(year=3),
                                                    id=id, is_delete=False)
        else:
            return DnDetailModel.objects.none()

    def get_serializer_class(self):
        if self.action in ['list']:
            return dnserializers.DNDetailGetSerializer
        else:
            return self.http_method_not_allowed(request=self.request)

    def notice_lang(self):
        lang = self.request.META.get('HTTP_LANGUAGE')
        return lang

    def list(self, request, *args, **kwargs):
        print(request)
        code = request.query_params.get('code')
        print(code)
        context = {}
        dataset = {}
        dimensions = ['product']
        source = []
        series = []
        bar_charts = {
            "type": 'bar',
            "barWidth": '4%',
            "barGap": '60%',
            "barCategoryGap": '10%',
            "itemStyle": {
              "normal": {
                "label": {
                  "show": "true",
                  "position": "top"
                }
              }
            }
          }
        three_years_ago = dt.datetime.now() - relativedelta(years=3)
        sales_data = DnDetailModel.objects.filter(dn_status=6, goods_code=code, create_time__gte=timezone.now().date() - relativedelta(year=3),
                                                    is_delete=False).values('customer').annotate(total=Sum('goods_qty'))
        print(sales_data)
        res_dic = {}

        for sale in sales_data:
            series.append(bar_charts)
            dimensions.append(sale['customer'])
            res_dic.update({sale['customer']: sale['total']})

        source.append(res_dic)
        dataset['source'] = source
        dataset['dimensions'] = dimensions
        context['dataset'] = dataset
        context['series'] = series
        return Response(context)


class SearViewSet(viewsets.ModelViewSet):
    """
        list:
            Response a data list（all）
    """
    pagination_class = None
    filter_backends = [DjangoFilterBackend, OrderingFilter, ]
    ordering_fields = ['id', "create_time", "update_time", ]
    filter_class = DnDetailFilter

    def get_project(self):
        try:
            id = self.kwargs.get('pk')
            return id
        except:
            return None

    def get_queryset(self):
        print("run a")
        id = self.get_project()
        if self.request.user:
            print(id)
            if id is None:
                return DnDetailModel.objects.filter(openid=self.request.auth.openid, dn_status__gte=4,
                                                    create_time__gte=timezone.now().date() - relativedelta(year=3),
                                                    is_delete=False)
            else:
                return DnDetailModel.objects.filter(openid=self.request.auth.openid, dn_status__gte=4,
                                                    create_time__gte=timezone.now().date() - relativedelta(year=3),
                                                    id=id, is_delete=False)
        else:
            return DnDetailModel.objects.none()

    def get_serializer_class(self):
        if self.action in ['list']:
            return dnserializers.DNDetailGetSerializer
        else:
            return self.http_method_not_allowed(request=self.request)

    def notice_lang(self):
        lang = self.request.META.get('HTTP_LANGUAGE')
        return lang

    def list(self, request, *args, **kwargs):
        print(request)
        code = request.query_params.get('code')
        print(code)
        context = {}
        dataset = {}
        dimensions = ['product']
        source = []
        series = []
        bar_charts = {
            "type": 'bar',
            "barWidth": '4%',
            "barGap": '60%',
            "barCategoryGap": '10%',
            "itemStyle": {
              "normal": {
                "label": {
                  "show": "true",
                  "position": "top"
                }
              }
            }
          }
        three_years_ago = dt.datetime.now() - relativedelta(years=3)
        sales_data = DnDetailModel.objects.filter(dn_status=6, customer=code, create_time__gte=timezone.now().date() - relativedelta(year=3),
                                                    is_delete=False).values('goods_code').annotate(total=Sum('goods_qty'))
        print(sales_data)
        res_dic = {}

        for sale in sales_data:
            series.append(bar_charts)
            dimensions.append(sale['goods_code'])
            res_dic.update({sale['goods_code']: sale['total']})

        source.append(res_dic)
        dataset['source'] = source
        dataset['dimensions'] = dimensions
        context['dataset'] = dataset
        context['series'] = series
        return Response(context)

class CustViewSet(viewsets.ModelViewSet):
    """
        list:
            Response a data list（all）
    """
    pagination_class = None
    filter_backends = [DjangoFilterBackend, OrderingFilter, ]
    ordering_fields = ['id', "create_time", "update_time", ]
    filter_class = DnDetailFilter

    def get_project(self):
        try:
            id = self.kwargs.get('pk')
            return id
        except:
            return None

    def get_queryset(self):
        id = self.get_project()
        if self.request.user:
            if id is None:
                return DnDetailModel.objects.filter(openid=self.request.auth.openid, dn_status__gte=4,
                                                    create_time__gte=timezone.now().date() - relativedelta(days=14),
                                                    is_delete=False)
            else:
                return DnDetailModel.objects.filter(openid=self.request.auth.openid, dn_status__gte=4,
                                                    create_time__gte=timezone.now().date() - relativedelta(days=14),
                                                    id=id, is_delete=False)
        else:
            return DnDetailModel.objects.none()

    def get_serializer_class(self):
        if self.action in ['list']:
            return dnserializers.DNDetailGetSerializer
        else:
            return self.http_method_not_allowed(request=self.request)

    def notice_lang(self):
        lang = self.request.META.get('HTTP_LANGUAGE')
        return lang

    def list(self, request, *args, **kwargs):
        cust = CustModel.objects.values_list('customer_name', flat=True)
        cust_codes = list(cust)

        return Response(cust)



class ProductViewSet(viewsets.ModelViewSet):
    """
        list:
            Response a data list（all）
    """
    pagination_class = None
    filter_backends = [DjangoFilterBackend, OrderingFilter, ]
    ordering_fields = ['id', "create_time", "update_time", ]
    filter_class = DnDetailFilter

    def get_project(self):
        try:
            id = self.kwargs.get('pk')
            return id
        except:
            return None

    def get_queryset(self):
        id = self.get_project()
        if self.request.user:
            if id is None:
                return DnDetailModel.objects.filter(openid=self.request.auth.openid, dn_status__gte=4,
                                                    create_time__gte=timezone.now().date() - relativedelta(days=14),
                                                    is_delete=False)
            else:
                return DnDetailModel.objects.filter(openid=self.request.auth.openid, dn_status__gte=4,
                                                    create_time__gte=timezone.now().date() - relativedelta(days=14),
                                                    id=id, is_delete=False)
        else:
            return DnDetailModel.objects.none()

    def get_serializer_class(self):
        if self.action in ['list']:
            return dnserializers.DNDetailGetSerializer
        else:
            return self.http_method_not_allowed(request=self.request)

    def notice_lang(self):
        lang = self.request.META.get('HTTP_LANGUAGE')
        return lang

    def list(self, request, *args, **kwargs):
        products = ListModel.objects.values_list('goods_code', flat=True)
        products_codes = list(products)

        return Response(products_codes)
