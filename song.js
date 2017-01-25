function Song(title, artist, duration) {
  this.title = title;
  this.artist = artist;
  this.duration = duration;
  this.isPLaying = false;
}

Song.prototype.play = function() {
  this.isPLaying = true;
};

Song.prototype.stop = function() {
  this.isPLaying = false;
};

Song.prototype.toHTML = function() {
  let htmlString = '<li ';
  if (this.isPLaying){
    htmlString += 'class="current"';
  }  
  htmlString += '>';
  htmlString += this.title + ' - ';
  htmlString += this.artist;
  htmlString += '<span class="duration">';
  htmlString += this.duration;
  htmlString += '</span></li>';
  return htmlString;
};