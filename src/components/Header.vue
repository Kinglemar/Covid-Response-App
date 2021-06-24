<template>
    <div id="nav">

    <div>
        <span><i class="fas fa-virus fa-8x"></i><b>COVID-19</b></span>
    <nav>
      <ul class="container new">
        <li class="spacer"><router-link to="/">Home <i class="fas fa-home fa-1x"></i></router-link></li>
        <li><router-link to="/gethelp" class="extra">Get Help <i class="fas fa-cross"></i></router-link></li>
        <li><router-link to="/guidelines" class="extra">Covid Guidelines <i class="fas fa-clipboard-list"></i></router-link></li>
        <li><router-link to="/checkup" class="extra" >Check-Up <i class="fas fa-stethoscope"></i></router-link></li>
        <li><router-link to="/helplines" class="extra">helplines <i class="fas fa-phone-alt"></i></router-link></li>
      </ul>

      <ul class="back-up hide">
        <li class=""><router-link to="/"><i class="fas fa-home fa-2x"></i><small class="push">Home</small></router-link></li>
        <li><router-link to="/gethelp" class="s-extra"><i class="fas fa-cross fa-2x"></i><small style="padding-left:30px">Help</small></router-link></li>
        <li><router-link to="/guidelines" class="s-extra"><i class="fas fa-clipboard-list fa-2x"></i><small style="padding-left:30px">Guidelines</small></router-link></li>
        <li><router-link to="/checkup" class="s-extra"><i class="fas fa-stethoscope fa-2x"></i><small style="padding-left:30px">CheckUp</small></router-link></li>
        <li><router-link to="/helplines" class="s-extra"><i class="fas fa-phone-alt fa-2x"></i><small style="padding-left:25px">Helplines</small></router-link></li>
      </ul>


      <ul class="fall-back-menu hide">
        <li class=""><router-link to="/"><i class="fas fa-home fa-1x"></i><small class="push">Home</small></router-link></li>
        <li><router-link to="/gethelp" class="s-extra"><i class="fas fa-cross fa-1x"></i><small>Help</small></router-link></li>
        <li><router-link to="/guidelines" class="s-extra"><i class="fas fa-clipboard-list fa-1x"></i><small>Guidelines</small></router-link></li>
        <li><router-link to="/checkup" class="s-extra"><i class="fas fa-stethoscope fa-1x"></i><small>CheckUp</small></router-link></li>
        <li><router-link to="/helplines" class="s-extra"><i class="fas fa-phone-alt fa-1x"></i><small>Helplines</small></router-link></li>
      </ul>

<!-- **********************************smallest view-ports****************************************** -->

    </nav>
    </div>

    </div>
</template>


<script>
    export default{
        name: 'Header'
    }
</script>

<style scoped>

*, *:before, *:after {
  box-sizing: border-box;
}
li, a{
  list-style: none;
  text-decoration: none;
  color: #2c3e50;
  font-weight: 600;
  box-sizing: border-box;
  margin: 0pc;
}

img{
    width: 200px;
    padding-bottom: 2rem;
}

a:hover{
    opacity: .8;
}

small{
    text-align: center;
    font-size: 12px;
}

ul{
    display: flex;
    margin: 0;
    padding: 0;
  }

  i{
    padding: 1rem;
    color: #52b788;
  }

  .back-up i{
    padding: .2rem .5rem;
  }

nav{
  padding: 1rem 2rem;
  border-bottom: 2px #ecedef solid;
  margin: 0;
}

b{
    font-weight: 900;
    text-decoration: underline;
}

.new{
  margin: 0px;
}

.extra{
  margin-left: 2rem;
}

.s-extra{
  padding: 1rem;
}

  .spacer{
    margin-right: auto;
    padding: 0 .5rem;
  }



  .container{
    display: flex;
    box-sizing: border-box;
    margin: 0;
    max-width: 1320px;
  }

  .container i{
    padding: .5rem;
  }

  .back-up{
    display: none;
  }

  .fall-back-menu{
    display: flex;
  }
  .hide{
    display: none;
  }

  @media screen and (max-width:925px){
    .extra{
      margin-left: 1rem;
    }
  }

  @media screen and (max-width:824px){
    .container{
      display: none;
    }

    .back-up{
      display: flex;
    }

    .push{
      padding-left: 0px;
    }

    .back-up i{
      padding:0 1rem;
    }
  }

  @media screen and (max-width:515px){
    nav{
      padding: 1rem .5rem;
    }

    .s-extra{
      padding: 1rem;
    }
  }

  @media screen and (max-width:475px){
    .back-up{
      display: none;
    }

    .container{
      display: none;
    }

    .fall-back-menu{
      display: flex;
    }

    .s-extra{
      padding: 0;
    }

    .fall-back-menu i{
      padding: 0rem 1rem;
    }

    nav{
      position: fixed;
      bottom: -2.3vh;
      left: -1vw;
      background: #52b788;
      color: #fff;
      z-index: 200;
      opacity: 8;
    }
    nav i{
      color: #fff;
    }

    span i{
      font-size: 6rem;
    }

    small{
      color: #fff;
      font-weight: 500;
      font-size: 12px;
    }

    #nav a.router-link-exact-active{
  text-decoration: none;
  }
  }
</style>