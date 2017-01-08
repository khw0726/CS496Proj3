<template>
  <nav class="bs-docs-sidebar">
    <ul class="nav nav-stacked fixed">
        <li v-for="item in dates(items)" role="presentation"><a href="#" v-on:click ="onItemClick(item)">
        {{ item }} 
        </a></li>
    </div>
    <h5>{{ dates(items) }}</h5>
  </nav>
</template>

<script>
  export default {
    name: 'sidebar',
    props: ['items', 'onItemClick'],
    methods: {
      dates: function (items) {
        return items.map(function (item) {
          let a = new Date(item.date)
          return a.toLocaleString('en-US')
        })
      }
    }
  }

</script>

<style>
/*Sidebar from https://jsfiddle.net/gableroux/S2SMK/*/
.bs-docs-sidebar {
    padding-right: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
}

/* all links */
.bs-docs-sidebar .nav>li>a {
    color: #999;
    border-left: 2px solid transparent;
    padding: 4px 20px;
    font-size: 13px;
    font-weight: 400;
}


/* active & hover links */
.bs-docs-sidebar .nav>.active>a, 
.bs-docs-sidebar .nav>li>a:hover, 
.bs-docs-sidebar .nav>li>a:focus {
    color: #563d7c;                 
    text-decoration: none;          
    background-color: transparent;  
    border-left-color: #563d7c; 
}
/* all active links */
.bs-docs-sidebar .nav>.active>a, 
.bs-docs-sidebar .nav>.active:hover>a,
.bs-docs-sidebar .nav>.active:focus>a {
    font-weight: 700;
}

/* hide inactive nested list */
.bs-docs-sidebar .nav ul.nav {
    display: none;           
}
/* show active nested list */
.bs-docs-sidebar .nav>.active>ul.nav {
    display: block;           
}
</style>
