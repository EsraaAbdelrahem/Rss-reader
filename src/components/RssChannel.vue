<template>
  <div class="reader-container col-md-12">
    <p class="reader-title pt-2">
      <b> {{ readerData.feed.title }} </b>
    </p>
    <sequential-entrance fromTop>
      <div
        v-for="(item, index) in readerData.items.slice(0, 9)"
        :key="index"
        class="one-news col-md-4 d-inline-block p-1">
        <section class="news-body p-3">
          <a :href="item.link" class="news-title">
            <b>
              {{ item.title }}
            </b>
          </a>
          <p class="news-date">{{ item.pubDate }}</p>
        </section>
        <img class="news-image" :src="item.enclosure.link" />
      </div>
    </sequential-entrance>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
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
  .one-news {
    position: relative;
    box-shadow: 0px 0px 5px rgba(129, 129, 212, 0.8);
    .news-body {
      display: flex;
      flex-direction: column;
      position: absolute;
      box-sizing: border-box;
      color: @white;
      cursor: pointer;
      .news-title {
        color: @white;
        @media (min-device-width: 768px) and (max-device-width: 1024px) {
          font-size: small;
        }
      }
      .news-date {
        top: 70px;
      }
    }
  }
  .news-image {
    width: 100%;
    height: auto;
  }
}
</style>