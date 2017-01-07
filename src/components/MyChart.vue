<script>
  import { Bar, mixins } from 'vue-chartjs'
  export default Bar.extend({
    name: 'mychart',
    mixins: [mixins.reactiveProp],
    props: ['chartData', 'options'],
    mounted () {
      console.log(this.chartData)
      // let dates = this.diary.map(function (diary) {
      //   console.log('date' + diary.date)
      //   return diary.date
      // })
      // let sentiments = this.diary.map(function (diary) {
      //   console.log('sentiment' + diary.sentiment)
      //   return diary.sentiment
      // })
      // this.renderChart({
      //   labels: this.dates,
      //   //  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      //   datasets: [
      //     {
      //       label: 'Sentimental Analysis Result',
      //       backgroundColor: '#f87979',
      //       data: this.sentiments
      //     }
      //   ]
      // })
      this.renderChart(this.chartData, this.options)
    }
  })
  </script>
