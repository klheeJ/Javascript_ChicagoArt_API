
function printArtInfo(Id) 
{fetch(`https://api.artic.edu/api/v1/artworks/${Id}`)
    .then((data)=>{
    return data.json(); 
}).then((objectData)=>{
    console.log(objectData.data.title);

artTitle = objectData.data.title
artArtist = objectData.data.artist_title
artDate = objectData.data.date_start
artOrigin = objectData.data.place_of_origin

document.getElementById(`content_body_${Id}`).innerHTML = artTitle
document.getElementById(`content_artist_${Id}`).innerHTML = artArtist
document.getElementById(`content_date_${Id}`).innerHTML = artDate
document.getElementById(`content_origin_${Id}`).innerHTML = artOrigin

    // const textInfo= document.getElementById("content_body_text")
    // textInfo.innerHTML=objectData.data.title
});
};

function IdLoop(){
   let artPieces=document.querySelectorAll(".art-image")
   artPieces.forEach((artPiece)=>{
        let Id = artPiece.id
        printArtInfo(Id)
   })
}

IdLoop()
    
   







