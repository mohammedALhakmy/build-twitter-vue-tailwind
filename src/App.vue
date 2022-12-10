<script>
  export default{
    data(){
      return {
        tabs: [
          {icon: "fas fa-home",title: "Hoem",id:"home"},
          {icon: "fas fa-hashtag",title: "Explore",id:"explore"},
          { icon: "far fa-bell", title: "Notifications", id:"notifications"},
          { icon: "far fa-envelope", title: "Messages", id:"messages"},
          {icon: "far fa-bookmark",title: "Bookmarks",id:"bookmarks"},
          { icon: "fas fa-clipboard-list", title: "Lists", id:"lists"},
          { icon: "fas fa-user", title: "Profile", id:"profile"},
          {icon: "fas fa-ellipsis-h",title: "More",id:"more"}
             ],
             id: "home",
        dropdown : false,
        trending:false,
        trending:[
          {top: "Trending in TX", title: 'Gigi', bottom: 'Trending With: Rip Gipi'},
          {top: "Music", title: 'We Won', bottom: '135X Tweest'},
          {top: "Pop", title: 'Blue Ivy', bottom: '40k tweets'},
          {top: "Trending in Us", title: 'Denim Day', bottom: '40k tweets'},
          {top: "Trending", title: 'when Beyonce', bottom: '25.4k tweets'},
         
        ],
        frindes:[
          { src:"1.png",name: "AA BBB", handle: "@aabbb"},
          { src:"2.png",name: "CC DDD", handle: "@ccddd"},
          { src:"3.png",name: "EE FFF", handle: "@eefff"},
          { src:"4.png",name: "AA BBB", handle: "@aabbb"},
          { src:"1.png",name: "AA BBB", handle: "@aabbb"},
          { src:"3.png",name: "AA BBB", handle: "@aabbb"},
          { src:"4.png",name: "AA BBB", handle: "@aabbb"},
          { src:"2.png",name: "AA BBB", handle: "@aabbb"},
        ],
        fallowing: [
          { src: "1.png", name: "AA BBB", handle: "@aabbb", time:"20 min",tweet:"Next open up Nginx config, by default, it should be in this file, if ",comments:"1,000",retweet:"550",like:'1,000,000,000' },
          { src: "2.png", name: "CC DDD", handle: "@ccddd", time: "20 min", tweet: "Next open up Nginx config, by default, it should be in this file, if ", comments: "1,000", retweet: "550", like: '1,000,000,000' },
          { src: "3.png", name: "EE FFF", handle: "@eefff", time: "20 min", tweet: "Next open up Nginx config, by default, it should be in this file, if ", comments: "1,000", retweet: "550", like: '1,000,000,000' },
          { src: "4.png", name: "AA BBB", handle: "@aabbb", time: "20 min", tweet: "Next open up Nginx config, by default, it should be in this file, if ", comments: "1,000", retweet: "550", like: '1,000,000,000' },
          { src: "1.png", name: "AA BBB", handle: "@aabbb", time: "20 min", tweet: "Next open up Nginx config, by default, it should be in this file, if ", comments: "1,000", retweet: "550", like: '1,000,000,000' },
          { src: "3.png", name: "AA BBB", handle: "@aabbb", time: "20 min", tweet: "Next open up Nginx config, by default, it should be in this file, if ", comments: "1,000", retweet: "550", like: '1,000,000,000' },
          { src: "4.png", name: "AA BBB", handle: "@aabbb", time: "20 min", tweet: "Next open up Nginx config, by default, it should be in this file, if ", comments: "1,000", retweet: "550", like: '1,000,000,000' },
          { src: "2.png", name: "AA BBB", handle: "@aabbb", time: "20 min", tweet: "Next open up Nginx config, by default, it should be in this file, if ", comments: "1,000", retweet: "550", like: '1,000,000,000' },
        ],
        tweets:[
          { content: "It is so nice outside!"}
        ],
        tweet:[
          {content: ''}
        ]
      }
    },
    methods:{
      addNewTweet() {
        let newTweet = {
            content:this.tweet.content
        };
        this.tweets.push(newTweet)
      }
    }
  }
</script>

<template>
   <div class="   flex lg:ml-28 ml-5 h-screen">
    <!--  Side Nav -->
    <div class="lg:w-1/5 border-lightest border-r-2  shadow-inner lg:px-6 px-2 py-1 flex flex-col justify-between">
      <div>
        <button class="h-12 w-12 -ml-2 hover:bg-lighblue text-3xl  rounded-full text-blue">
          <i class="fab fa-twitter"></i>
        </button>
        <div class="">
          <button @click="id = tab.id" v-for="(tab,i) in tabs" :key="i" :class="`hover:text-blue flex items-center hover:p-3 transition  ease-out duration-700 py-2 hover:bg-lighblue rounded-full mr-auto mb-3 pr-2 ${ id === tab.id ? 'text-blue' : ''}`">
            <i :class="`${ tab.icon } text-2xl mr-4 text-left`"></i>
            <p class="text-lg font-semibold text-left hidden lg:block">{{ tab.title }}</p>
          </button>
      </div>
      <button
        class="text-white bg-blue rounded-full font-semibold focus:outline-none -ml-2 lg:w-full w-12 h-12 lg:h-auto p-3 hover:bg-darkblue">
        <p class="hidden lg:block">
             Twitter
        </p>
        <i class="fas fa-plus lg:hidden"></i>
      </button>

      </div>
      <div class="lg:w-full relative">
        <button @click="(dropdown = true)" class="flex items-center w-full hover:bg-lightest rounded-full p-2">
          <img src="./img/twitter.png" alt="" class="w-10 h-10 rounded-full border border-lighter">
          <div class="ml-3 hidden lg:block">
            <p class="text-sm font-bold leading-tight">Steph dietz</p>
            <p class="text-sm leading-tight">@SaaSyEth</p>
          </div>
          <i class=" hidden lg:block fas fa-angle-down ml-auto"></i>
        </button>
        <div v-if="dropdown === true" class="absolute bottom-0 right-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-20 left-0">
            <button @click="dropdown = false" class="flex items-center w-full hover:bg-lightest p-2">
              <img src="./img/twitter.png" alt="" class="w-10 h-10 rounded-full border border-lighter">
              <div class="ml-3">
                <p class="text-sm font-bold leading-tight">Steph dietz</p>
                <p class="text-sm leading-tight">@SaaSyEth</p>
              </div>
              <i class="fas fa-check ml-auto text-blue"></i>
            </button>
            <button @click="dropdown = false" class="w-full text-left hover:bg-lightest border-t border-lighter p-3 text-sm">
              Add an existing account
            </button>
            <button @click="dropdown = false" class="w-full text-left hover:bg-lightest border-t border-lighter p-3 text-sm">
              Log out @SaaSyEth
            </button>
        </div>
      </div>
    </div>
    <!-- End Nav Bar  -->

    <!-- Section  -->
    <div class="w-1/2 h-full overflow-y-scroll">
      <div class="px-5 py-3 border-b  border-lighter flex items-center justify-between">
        <h1 class="text-xl font-bold">Home</h1>
        <i class="far fa-star text-xl text-blue"></i>
      </div>
      <div class="px-5 py-3 border-b-8 border-lighter flex">
          <div>
            <img src="./img/4.png" class="w-12 h-12 rounded-full border border-lighter" alt="">
          </div>
          <form v-on:submit="addNewTweet" class="w-full px-4 relative">
            <textarea  name="" placeholder="What is up?" class="w-full mt-3 pb-3 focus:outline-none" id="" cols="30" rows="10"/>
            <div class="flex items-center">
              <i class="text-lg text-blue mr-4 far fa-image"></i>
              <i class="text-lg text-blue mr-4 fa fa-file"></i>
              <i class="text-lg text-blue mr-4 far fa-chart-bar"></i>
              <i class="text-lg text-blue mr-4 far fa-smile"></i>
              </div>
              <button type="submit" class="rounded-full h-10 px-4 text-white font-semibold bg-blue hover:bg-darkblue focus:outline-none absolute bottom-0 right-0">
                Tweet 
              </button>
          </form>
      </div>
      <div class="flex flex-col-reverse">
            <div v-for="(tweet,i) in tweets" :key="i">
              <div v-for="fallow,i in fallowing" :key="i" class="w-full p-4 border-4 hover:bg-lighter flex">
                <div class="flex-none mr-4">
                  <img :src="`src/img/${ fallow.src }`" class="h-12 w-12 rounded-full flex-none" alt="">
                </div>
                <div class="w-full">
                  <div class="flex items-center w-full">
                    <p class="font-semibold">{{ fallow.name }}</p>
                    <p class="font-sm text-dark ml-2">{{ fallow.tweet }}</p>
                    <p class="font-sm text-dark ml-2">{{ fallow.time }}</p>
                    <i class="fas fa-angle-down text-dark ml-auto"></i>
                  </div>
                  <p class="py-2"> {{ fallow.tweet }}</p>
                  <div class="flex items-center justify-between w-full">
                    <div class="flex items-center text-sm text-dark">
                      <i class="far fa-comment mr-3"></i>
                      <p>{{ fallow.comments }}</p>
                    </div>
                    <div class="flex items-center text-sm text-dark">
                      <i class="fas fa-retweet mr-3"></i>
                      <p>{{ fallow.retweet }}</p>
                    </div>
                    <div class="flex items-center text-sm text-dark">
                      <i class="far fa-heart mr-3"></i>
                      <p>{{ fallow.like }}</p>
                    </div>
                    <div class="flex items-center text-sm text-dark">
                      <i class="far fa-share-square mr-3"></i>
                    </div>
                  </div>
                </div>
              </div>

           </div>
           
      </div>
  
    </div>
    <!-- Section End  -->

    <!-- Trending  -->
    <div class="md:block hidden w-1/3 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative">
      <input type="text" class="rounded-full w-full pl-12 p-2 bg-lighter outline-none" placeholder="Search Twitter">
      <i class="fas fa-search absolute left-0 top-0 mt-5 ml-10 text-light"></i>
      <div class="w-full rounded-lg bg-lightest">
        <div class="flex items-center justify-between p-3">
          <p class="text-lg font-bold">Trends For you</p>
          <i class="fas fa-cog text-lg text-blue"></i>
        </div>
        <button v-for="(trend,i) in trending" :key="i" class="w-full flex justify-between hover:bg-lighter hover:rounded-2xl p-3 border-t border-lighter">
          <div>
            <p class="text-sm text-left leading-tight text-dark">{{  trend.top }}</p>
            <p class="font-bold text-left leading-tight">{{  trend.title }}</p>
            <p class="text-left leading-tight text-dark">{{  trend.bottom }}</p>
          </div>
          <i class="fas fa-angle-down text-lg text-dark"></i>
        </button> 
        <button class="p-3 w-full hover:bg-lighter text-left border-t border-lighter text-blue">
          Show More
        </button>
      </div>


      <div class="w-full rounded-lg bg-lightest my-4">
        <div class="p-3">
          <p class="text-lg font-bold">Who to Follow</p>
          <i class="fas fa-cog text-lg text-blue"></i>
        </div>
        <button v-for="frind,i in frindes" :key="i"
          class="w-full flex  hover:bg-lighter hover:rounded-2xl p-3 border-t border-lighter">
          <img :src="`src/img/${ frind.src} `" alt="" class="w-12 h-12 rounded-full border border-lighter">
          <div class="ml-3 hidden lg:block">
            <p class="text-sm font-bold leading-tight">{{ frind.name }}</p>
            <p class="text-sm leading-tight">{{ frind.handle }}</p>
          </div>
          <button class="text-sm text-blue py-2 px-4 rounded-full border-2 border-blue ml-auto">
            Follow
          </button>
        </button>
        <button class="p-3 w-full hover:bg-lighter text-left border-t border-lighter text-blue">
          Show More
        </button>
      </div>


    </div>
    <!-- Trending  End -->

   </div>  

    <!-- ul>li*20>p.class1$>span.para        -->
</template>

<style scoped>
</style>
