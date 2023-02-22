import firebase from "firebase";

export async function download(title) {
  const imageURL = `test/${title}`;
  return await firebase
    .storage()
    .ref()
    .child(imageURL)
    .getDownloadURL(function (error) {
      if (!error) {
        alert("画像のダウンロードに失敗しました");
        console.log(error);
      } else {
        console.log("ダウンロードに成功しました");
      }
    });
}
