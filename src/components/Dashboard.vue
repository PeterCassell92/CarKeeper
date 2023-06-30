<template>
  <div class="my">
    <section class="section maintenance-section">
      <div>
        <h1>Maintenance</h1>
        <div class="yearly cost">
          <h3>Total cost this year</h3>
          <h3 class="cost">
            cost
          </h3>
          <!-- <CostCalendar></CostCalendar> -->
          <button>Log Cost</button>
          <Link>View Cost Details<Link />
        </div>
      </div>
    </section>
    <section class="section legal-expense-section">
      <div>
        <h1>Legal Fees</h1>
        <div class="yearly cost">
          <h3>Total cost this year</h3>
          <h3 class="cost">
            cost
          </h3>
          <div>
            <h4>MOT</h4>
            <h4>{MOTCOST}</h4>
          </div>
          <CostCalendar type="yearly" />
          <button>Log Cost</button>
          <button>Manage Expense</button>
          <Link>View Cost Details<Link />
        </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Dashboard',
  data: function() {
    return {
        ppp: "ppp"
      };
  },
  computed: {
    cost(){
      return 999
    }
  }
};
</script>
<style lang="scss" scoped>
    .my{
        color: blue;
    }
</style>
