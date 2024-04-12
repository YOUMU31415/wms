from django.urls import path, re_path
from . import views

urlpatterns = [
path(r'receipts/', views.ReceiptsViewSet.as_view({"get": "list"}), name="receipts"),
path(r'sales/', views.SalesViewSet.as_view({"get": "list"}), name="sales"),
path(r"cust/", views.CustViewSet.as_view({"get": "list"}), name="cust"),
path(r'product/', views.ProductViewSet.as_view({"get": "list"}), name="product"),
path(r'sear/', views.SearViewSet.as_view({"get": "list"}), name="sear")
]