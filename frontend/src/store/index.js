import Vue from "vue";
import Vuex from "vuex";
import pathify from "vuex-pathify";
 
Vue.use(Vuex);

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    plugins: [pathify.plugin],
    modules: {
 
    }
  });

  return Store;
}
