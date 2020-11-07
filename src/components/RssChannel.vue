<template>
  <div class="reader-container col-md-12">
    <p class="reader-title pt-2">
      <b> {{ readerData.feed.title }} </b>
    </p>
    <sequential-entrance tag="div" fromTop>
      <div class="news-container">
        <div
          v-for="(item, index) in readerData.items"
          :key="index"
          v-show="index <= newsToShow"
          class="one-news p-1"
        >
          <section class="news-body p-2">
            <a :href="item.link" class="news-title">
              <b>
                {{ item.title }}
              </b>
            </a>
            <p class="news-date">{{ item.pubDate }}</p>
          </section>
          <img class="news-image" :src="item.enclosure.link" />
        </div>
      </div>
    </sequential-entrance>
    <div class="load-more-section pt-3">
      <button class="btn load-more-btn" @click="newsToShow++">Load more</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: function () {
    return {
      newsToShow: 6,
    };
  },
  created: function () {
    this.getData();
  },
  computed: {
    ...mapGetters({
      readerData: "Reader/readerData",
    }),
  },
  methods: {
    ...mapActions({
      getData: "Reader/getData",
    }),
  },
};
</script>

<style lang="less" scoped>
@white: #fff;
.reader-container {
  margin: 20px 0;
  .news-container {
    display: grid;
    grid-template-columns: auto auto auto;
    // grid-template-rows: 25% 20% 25% 20%;
    grid-gap: 10px;
    @media (min-device-width: 280px) and (max-device-width: 700px) {
      grid-template-columns: 100%;
    }
    .one-news {
      position: relative;
      box-shadow: 0px 0px 5px rgba(129, 129, 212, 0.8);
      &:first-child {
        grid-column: 1 / span 2;
        grid-row: 1 / 2;
      }
      &:nth-child(7) {
        grid-column-start: 2;
        grid-column-end: 4;
        grid-row-start: 3;
        grid-row-end: 3;
        // grid-area: 2 / 3 / 3 / 4;
      }
      &:first-child,
      &:nth-child(7) {
        @media (min-device-width: 280px) and (max-device-width: 700px) {
          grid-area: unset;
        }
      }
      .news-body {
        display: flex;
        flex-direction: column;
        position: absolute;
        box-sizing: border-box;
        color: @white;
        bottom: 10px;
        .news-title {
          color: @white;
          @media (min-device-width: 280px) and (max-device-width: 1024px) {
            font-size: small;
          }
        }
      }
    }
    .news-image {
      width: 100%;
      height: 100%;
    }
  }
  .load-more-section {
    display: flex;
    justify-content: center;
    .load-more-btn {
      background-color: @white;
      border: 1px solid black;
      outline: none;
    }
  }
}
</style>