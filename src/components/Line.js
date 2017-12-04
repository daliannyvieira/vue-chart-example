import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March'],
      datasets: [
        {
          label: 'Dados',
          backgroundColor: '#7521ff',
          data: [40, 20, 500]
        }
      ]
    })
  }
}