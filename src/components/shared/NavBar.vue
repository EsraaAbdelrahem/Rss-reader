<template>
  <div class="header">
    <b-navbar toggleable="lg" class="navigation d-flex">
      <img class="logo-img" src="../../assets/logo.png" />
      <b-navbar-brand class="header-title ml-2 mr-0" href="#">
        <b>TURN DIGITAL</b>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse is-nav>
        <section class="header-search">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="search-input"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="search-btn" type="submit">
              <i class="fa fa-search" aria-hidden="true"></i>
            </b-button>
          </b-nav-form>
        </section>
        <section class="my-profile">
          <a href="#">My Profile</a>
        </section>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style lang="less" scoped>
@white: #fff;
@font-size: 14px;
.header {
  .navigation {
    background: #f3f5f7;
    .logo-img {
      width: 40px;
      height: 40px;
    }
    .header-title {
      font-size: @font-size;
    }
    .my-profile {
      margin: 0 30px;
      a {
        color: black;
      }
    }
    .header-search {
      margin: auto;
      .search-btn,
      .search-input {
        box-sizing: content-box;
        box-shadow: 0px 0px 5px rgba(19, 19, 51, 0.1);
        padding: 10px 15px;
        height: 16px;
        line-height: 20px;
        font-size: @font-size;
        border: 0 none transparent;
      }
      .search-input {
        border-radius: 8px 0 0 8px;
        color: #6a6d75;
        background-color: @white;
        width: 300px;
      }
      .search-btn {
        border-radius: 0 8px 8px 0;
        color: @white;
        background-color: #325895;
      }
    }
  }
}
</style>