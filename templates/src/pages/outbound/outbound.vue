<template>
  <q-page class="flex flex-top">
<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 100%">
      <q-tabs
        v-model="detaillink"
      >
        <transition appear enter-active-class="animated zoomIn">
          <q-route-tab name="dn" :label="$t('outbound.dn')" icon="img:statics/outbound/dnlist.png" :to="{ name: 'dn' }" exact/>
        </transition>
        <transition appear enter-active-class="animated zoomIn">
          <q-route-tab name="neworder" :label="$t('outbound.neworder')" icon="img:statics/outbound/order.png" :to="{ name: 'neworder' }" exact/>
        </transition>
        <transition appear enter-active-class="animated zoomIn">
          <q-route-tab name="pickstock" :label="$t('outbound.pickstock')" icon="img:statics/outbound/pickstock.png" :to="{ name: 'pickstock' }" exact/>
        </transition>
        <transition appear enter-active-class="animated zoomIn">
          <q-route-tab name="pickinglist" :label="$t('outbound.pickinglist')" icon="img:statics/outbound/pickinglist.png" :to="{ name: 'pickinglist' }" exact/>
        </transition>
        <transition appear enter-active-class="animated zoomIn">
          <q-route-tab name="pod" :label="$t('outbound.pod')" icon="img:statics/outbound/receiving.png" :to="{ name: 'pod' }" exact/>
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
  name: 'Pageoutbound',
  data () {
    return {
      detaillink: 'dn'
    }
  },
  methods: {
  }
}
</script>
