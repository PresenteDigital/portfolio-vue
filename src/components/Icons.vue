<template>
  <section class="section-icons open-salud-icons pt-8">
   <h3>{{title}}</h3>   
    <v-container grid-list-md py-16 class="icons-main-container">
      <v-layout row wrap>
        <v-flex xs12 sm4 v-for="({ icon, title, subtitle }, index) in items" :key="index">
          <v-card class="card-container">
            <div class="icons-container">
               <div class="container-image">
               <g-image :src="require(`!!assets-loader!@images/${icon.text}`)"/>
              </div> 
            </div>
            <v-card-title class="mt-2 d-flex justify-center"
              ><h2 class="title">{{title.text}}</h2></v-card-title
            >

            <v-card-text class="mt-2 d-flex justify-center subtitle-text"
              >{{subtitle.text}}</v-card-text
            >
          </v-card>
     </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>


<script>
export default {

    data() {
    return {
 items: [
      {
        icon: {
          type: String,
          text: 'star.svg',
        },
        title: {
          type: String,
          text: "Los mejores"
        },
             subtitle: {
          type: String,
          text: "Los mejores médicos online"
          },
      },
      {
        icon: {
          type: String,
          text: 'price.svg',
        },
        title: {
          type: String,
          text: "Precio a tu medida"
        },
             subtitle: {
          type: String,
          text: "Precio a tu medida"
          },
      },
      {
        icon: {
          type: String,
          text: 'lock.svg'
        },
        title: {
          type: String,
          text: "Cuadro médico"
          },
            subtitle: {
          type: String,
          text: "El mejor cuadro médico"
          },
      }
      ]
    }
    },
  props: { 
      title: {
        type: String,
        default: "Consulta online a los mejores profesionales de medicina general y pediatría",
    }
  },
};
</script>
</script>
<style scope>


section.open-salud-icons {
  /* height: 100vh; */
  text-align: center;
  background-color: #e4e4e4;
    font-family: "Space Grotesk", sans-serif;
}
.open-salud-icons h2.title {
color: #3238c4 !important;
font-family: "Space Grotesk", sans-serif !important;
}
.open-salud-icons h3 {
  line-height: 1.2;
  font-size: 2rem;
  font-weight: 400;
  color: rgb(29, 29, 30);
  letter-spacing: 0.2px;
    padding-top: 3rem;
  display: flex;
  justify-content: center;
}

.open-salud-icons .icons-main-container {
  flex-direction: row;
    justify-content: space-around;
    display: flex;
}
.open-salud-icons .card-container {
  box-shadow: none !important;
  background: transparent !important;
}
.open-salud-icons .icons-container {
  display: flex;
  justify-content: center;
}

.open-salud-icons .container-image {
  display: flex;
  justify-content: center;
  width: 15rem;
  height: 20rem;
  background-color: #e4e4e4;
  border-radius: 1rem;
  -webkit-box-shadow: 3px 10px 15px 15px #bebebe;
  box-shadow: 3px 10px 15px 15px #bebebe;
}
.open-salud-icons .g-image-icons {
  -webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
  filter: drop-shadow(12px 9px 4px rgba(0, 0, 0, 0.1));
}
.subtitle-text{
  margin-top: 1px !important;
  }
@media (max-width: 600px) {
  .section-icons {
    margin-top: 32rem;
  }

  .open-salud-icons h3 {
    margin-top: 7rem;
}
}

</style>
