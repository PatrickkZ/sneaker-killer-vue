<template>
  <el-table
      :data="orders"
      style="width: 100%;padding-top: 30px;">
    <el-table-column
        prop="id"
        label="订单编号"
        width="180">
    </el-table-column>
    <el-table-column
        prop="itemName"
        label="商品名称"
        width="350">
    </el-table-column>
    <el-table-column
        prop="shoeSize"
        label="商品尺码"
        width="100">
    </el-table-column>
    <el-table-column
        prop="itemCount"
        label="数量"
        width="100">
    </el-table-column>
    <el-table-column
        prop="itemPrice"
        label="价格"
        width="100">
    </el-table-column>
    <el-table-column
        prop="status"
        label="订单状态"
        width="100"
        :formatter="statusFormat">
    </el-table-column>
    <el-table-column
        prop="createTime"
        label="创建时间">
    </el-table-column>
    <el-table-column
        label="操作"
        width="180%">
      <template slot-scope="scope">
        <el-button v-if="scope.row.status === 0"
            @click="payBill(scope.row)"
            type="success"
            size="mini">
          去支付
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  inject: ['reload'],
  name: "PersonalCenter",
  data() {
    return {
      orders: []
    }
  },
  mounted() {
    this.loadOrder()
  },
  methods: {
    loadOrder(){
      this.$axios.get('/user/order',{
        headers: {
          "Authorization": localStorage.getItem("SKtoken")
        }
      }).then(resp => {
        if (resp && resp.data.code === 200) {
          this.orders = resp.data.result
          console.log(resp.data.result)
        } else {
          this.$store.commit('logout')
          this.$message.error(resp.data.message)
        }
      })
    },
    statusFormat(row){
      if(row.status === 0){
        return '待支付'
      }else if(row.status === 1){
        return '已支付'
      }else {
        return '超时未支付'
      }
    },
    payBill(row){
      this.$axios.post('/user/pay', {
        id: row.id
      }, {
        headers: {
          "Authorization": localStorage.getItem("SKtoken")
        }
      }).then(resp => {
        if (resp && resp.data.code === 200) {
          this.$message({
            message: '支付成功',
            type: 'success'
          })
          this.reload()
        } else {
          this.$message.error(resp.data.message)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
