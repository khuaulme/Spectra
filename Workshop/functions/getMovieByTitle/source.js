exports = async function(arg){

  var collection = context.services
    .get("mongodb-atlas").db("sample_mflix").collection("movies");
  
  console.log ("IN GETMOVIEBYNAME FUNCTION");
  
  //Return a single document to matching the arg/movie name.
  var doc = await collection.findOne({title: arg});
  if (typeof doc === "undefined") {
    return `No movies named ${arg} were found.`;
  } 
  
  console.log(`FOUND A MATCHING MOVIE: ${arg}.`);
  
  return doc;
}