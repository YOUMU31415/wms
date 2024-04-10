<template>
  <q-page class="flex flex-top">
<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 100%">
      <q-tabs
        v-model="detaillink"
      >
        <transition appear enter-active-class="animated zoomIn">
          <q-route-tab name="asn" :label="$t('inbound.asn')" icon="img:statics/inbound/asn.png" :to="{ name: 'asn' }" exact/>
        </transition>
        <transition appear enter-active-class="animated zoomIn">
          <q-route-tab name="sortstock" :label="$t('inbound.sortstock')" icon="img:statics/inbound/sortstock.png" :to="{ name: 'sortstock' }" exact/>
        </transition>
        <transition appear enter-active-class="animated zoomIn">
          <q-route-tab name="shortage" :label="$t('inbound.shortage')" icon="img:statics/inbound/shortage.png" :to="{ name: 'shortage' }" exact/>
        </transition>
        <transition appear enter-active-class="animated zoomIn">
          <q-route-tab name="more" :label="$t('inbound.more')" icon="img:statics/inbound/more.png" :to="{ name: 'more' }" exact/>
        </transition>
        <transition appear enter-active-class="animated zoomIn">
          <q-route-tab name="asnfinish" :label="$t('inbound.asnfinish')" icon="img:statics/inbound/asnfinish.png" :to="{ name: 'asnfinish' }" exact/>
        </transition>
      </q-tabs>
    </div>
  </div>
</template>
    <div class="main-table">
      <router-view />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Pageinbound',
  data () {
    return {
      detaillink: 'asn'
    }
  },
  methods: {
  }
}
</script>
