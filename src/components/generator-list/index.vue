<template>
  <div class="generator-list">
    <table class="table table-hover generator-table">
      <thead class="thead-inverse">
        <tr>
          <th>Name</th>
          <th>Creator</th>
          <th>Gist</th>
        </tr>
      </thead>
      <tbody>
        <tr class="generator-item" v-for="item in collection" @click="generatorSelected(item.gist)">
          <th scope="row" v-text="item.name"></th>
          <td v-text="item.creator"></td>
          <td v-text="item.gist"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        collection: [
          {
            name: 'Post status',
            creator: 'Nguyễn Văn Được',
            gist: '9e4ab194fe0791548e7d9fa7452e13fa'
          },
          {
            name: 'Test',
            creator: 'Nguyễn Văn Được',
            gist: 'c5054f390cb6bcfda8abec630418867c'
          }
        ]
      }
    },
    methods: {
      generatorSelected (id) {
        this.$route.router.go({
          name: 'generator',
          params: {
            id: id
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .generator-list{
    .generator-table{
      .generator-item{
        cursor: pointer;
      }
    }
  }
</style>
