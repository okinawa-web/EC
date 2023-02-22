
<!-- <template>
    <v-app >
    <v-card class="mx-auto" max-width="344">
        <v-img v-if="uploadImageUrl" :src="this.uploadImageUrl" height="200px"></v-img>
    </v-card>
  </v-app>
</template>

<script>
import {download} from "@/plugins/storage.js"
import { onMounted } from '@vue/runtime-core'
export default{
  data: function(){
    return uploadImageUrl:"",
  }
}
onMounted: async function(){
  axios.get("hoge").then((res) => {

  })
  .catch(error => {alert(error)})
  const image = await download("");
  console.log(image);
  this.uploadImageUrl = image;
}
</script> -->
