<template>
  <div>
    <form @submit.prevent="fetchAllRepose()">
      <input type="text" placeholder="github user name" v-model="name" />
      <button type="submit">get all repo</button>
    </form>
    <br />
    <br />
    <h2>total repose: {{data.length}}</h2>
    <ul>
      <li v-for="(item, i) in data" :key="i">
        <h4>{{item.name}}</h4>
        <p>Language: <b>{{item.language}}</b></p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "GithubRepose",
  data() {
    return {
      name: "",
      data: []
    };
  },
  methods: {
    fetchAllRepose() {
      fetch(`https://api.github.com/users/${this.name}/repos`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.data = data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
</style>