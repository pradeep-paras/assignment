var imageInfo = [
  {
    imageUrl: "./Slider/image1.jpg",
    text: "It is time to worry about it. As far as the mass of any airline. In order to decorate the caricature of the hospital with arrows and the easy life of hatred. There is no easy tomorrow's ferment, eu feugiat pretium. There is no need to trigger a smile, even if it is a heart. He needs two pots and a pot of sauce. The price that vulputate dignissim has suspended in is before in. For the disease is now in the mouth of the children. He is said to have lived in this street. Purely pregnant, who flatters the ugly course of living in this. You will learn about the life of the shooters of CNN Mattis. Suscipit tellus mauris a diam maecenas sed. For the ugly football needs the price of the bronze quiver and the investment. Everyone is not a local doctor and the author of propaganda. Nor is pregnant in the heat and care and clinical phase."
  },
  {
    imageUrl: "./Slider/image2.jpg",
    text: "Purus faucibus ornare suspendisse sed nisi. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Leo a diam sollicitudin tempor. Lobortis feugiat vivamus at augue eget arcu. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Lobortis elementum nibh tellus molestie nunc non. Leo in vitae turpis massa sed elementum. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Hendrerit dolor magna eget est lorem ipsum dolor sit. Non tellus orci ac auctor augue mauris augue neque gravida. Ut enim blandit volutpat maecenas volutpat. Tincidunt ornare massa eget egestas. Lorem ipsum dolor sit amet consectetur adipiscing. Massa eget egestas purus viverra accumsan. Mi bibendum neque egestas congue quisque egestas. Dolor sit amet consectetur adipiscing elit. Scelerisque eleifend donec pretium vulputate sapien nec."
  },
  {
    imageUrl: "./Slider/image3.jpg",
    text: "Tincidunt lobortis feugiat vivamus at augue eget arcu. Ac tortor dignissim convallis aenean et tortor at risus viverra. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Quam quisque id diam vel quam elementum pulvinar etiam non. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Diam quis enim lobortis scelerisque fermentum dui. Magna ac placerat vestibulum lectus. Diam vel quam elementum pulvinar. Id leo in vitae turpis massa sed elementum. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Integer feugiat scelerisque varius morbi enim. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Neque aliquam vestibulum morbi blandit cursus. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Mi in nulla posuere sollicitudin."
  },
  {
    imageUrl: "./Slider/image9.jpg",
    text: "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Magna fermentum iaculis eu non diam phasellus vestibulum. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Arcu non odio euismod lacinia at quis risus sed. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Lacus viverra vitae congue eu consequat. Arcu bibendum at varius vel. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Sollicitudin nibh sit amet commodo nulla facilisi. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Quam pellentesque nec nam aliquam sem et tortor. Pellentesque adipiscing commodo elit at imperdiet. Fringilla urna porttitor rhoncus dolor purus non."
  },
  {
    imageUrl: "./Slider/image4.jpg",
    text: "Nulla malesuada pellentesque elit eget gravida. Viverra maecenas accumsan lacus vel facilisis volutpat. Vulputate odio ut enim blandit volutpat maecenas. Aliquam eleifend mi in nulla. Est ante in nibh mauris cursus mattis molestie a. Suscipit adipiscing bibendum est ultricies integer quis auctor. Enim blandit volutpat maecenas volutpat. Rhoncus mattis rhoncus urna neque viverra. Ipsum consequat nisl vel pretium lectus quam id leo in. Commodo nulla facilisi nullam vehicula. Sagittis orci a scelerisque purus semper. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Posuere lorem ipsum dolor sit amet."
  },
  {
    imageUrl: "./Slider/image6.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lobortis scelerisque fermentum dui faucibus in ornare. Euismod elementum nisi quis eleifend quam adipiscing vitae. Ipsum dolor sit amet consectetur. Turpis egestas pretium aenean pharetra magna ac. Sit amet est placerat in egestas. Odio ut sem nulla pharetra diam sit. Dignissim diam quis enim lobortis scelerisque fermentum dui. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Neque aliquam vestibulum morbi blandit cursus risus. Faucibus et molestie ac feugiat sed. Nisi quis eleifend quam adipiscing vitae."
  }
];

var imageContainer = document.querySelector(".image-container");

for (var i = 0; i < imageInfo.length; i++) {
  var imageObj = imageInfo[i];

  var img = document.createElement("img");
  img.src = imageObj.imageUrl;

  var textContainer = document.createElement("div");
  textContainer.className = "text-container";
  textContainer.textContent = imageObj.text;

  var imageWrapper = document.createElement("div");
  imageWrapper.appendChild(img);
  imageWrapper.appendChild(textContainer);

  imageContainer.appendChild(imageWrapper);
}