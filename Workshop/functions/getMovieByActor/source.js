exports = async function(actor){

  var collection = context.services
    .get("mongodb-atlas").db("sample_mflix").collection("movies");
  
  console.log ("IN GETMOVIEBYACTOR FUNCTION");
  
  //Return documents to matching the arg/actor name.
 
 var docs = await collection.find({cast: actor}).toArray();
  if (docs.length === 0) {
    return `No movies with ${actor} were found.`;
  } 
  
  console.log(`FOUND A MATCHING MOVIE: ${actor}.`);
  
  return docs;
}