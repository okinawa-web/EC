import { defineStore } from "pinia";
import { ref as storageRef, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { storage } from "@/firebase/firebase.js";

export const useImageStore = defineStore({
  id: "imageStore",

  state: () => ({
    imageURL: "",
    firebase: storage,
    cache: {}, // キャッシュ用のオブジェクト
  }),

  actions: {
    // APIで画像パスを取得し、画像のURLを取得してストアの状態に保存
    async loadImage(imageId) {
      const API_URL = "/image";
      try {
        console.log("loadImageが呼び出された");
        const res = await axios.get(`${API_URL}/${imageId}`);

        if (res.status === 200) {
          const path = res.data.path;
          console.log("APIからデータを取得した! path:", path);

          // キャッシュに対象のURLの画像データがある場合はキャッシュを使用する
          if (this.cache[path]) {
            console.log("キャッシュから取得!");
            this.setImageURL(this.cache[path]);
            return;
          }

          // キャッシュに対象のURLの画像データがない場合はダウンロードする
          const url = await this.getImageURL(path);
          console.log("画像URLを取得した! url:", url);
          this.setImageURL(url);

          // 取得した画像データをキャッシュに保存する
          this.cache[path] = url;
          console.log("キャッシュに画像データを保存した!");
        }
      } catch (error) {
        console.error(`画像の取得に失敗`);
        console.log("失敗理由", error);
        this.setImageURL("");
      }
    },

    // ストアのimageURLステートを更新
    setImageURL(url) {
      this.imageURL = url;
    },

    // 画像のダウンロードURLを取得する関数
    async getImageURL(path) {
      const firebaseRef = storageRef(this.$state.firebase, path);
      try {
        const url = await getDownloadURL(firebaseRef);
        // console.log("画像URL", url);
        return url;
      } catch (error) {
        console.error(`画像${path}の取得に失敗しました。`);
        return "";
      }
    },
  },
});
