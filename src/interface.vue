<template></template>

<script>
export default {

  props: {
    conditions: [],
    debug: false
  },
  mounted() {
    this.$parent.$parent.$el.style.display = "none";
    this.log("Initialize Conditional with ", this.conditions);
  },
  watch: {
    "$parent.$parent.$parent.values"(newVal, oldVal) {
      this.log("new val", newVal);
      this.log("old val", oldVal);

      this.conditions.forEach(con => {
        if (newVal[con.toggle] !== oldVal[con.toggle]) {
          this.log("Condition " + con.toggle + " was triggered!");
          con.conditions.forEach(c => {
            if (c.value === newVal[con.toggle]) {
              this.log("found case!");
              c.show.forEach(el => this.show(el));
              c.hide.forEach(el => this.hide(el));
            } else {
              this.log(c.value + " !== " + newVal[con.toggle]);
            }
          })
        }
      });
    }
  },
  methods: {
    hide(el) {
      this.log("hide " + el);
      document.querySelector(`[field="${el}" ], [fields="${el}"]`).parentElement.parentElement.style.display = "none";
    },
    show(el) {
      this.log("show " + el);
      document.querySelector(`[field="${el}" ], [fields="${el}"]`).parentElement.parentElement.style.display = "block";
    },
    log(log) {
      if(this.debug) {
        console.log(log)
      }
    }
  }
};
</script>