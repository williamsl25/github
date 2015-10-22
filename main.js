$(document).ready(function () {
  // anything in here is dom ready!
  var name = profile.name;
  var username = profile.login;
  var avatarURL = profile.avatar_url;
  var email = "<a href = \"mailto:"+ profile.email+ "\">" + profile.email + "</a>";
  var joinedDate = moment(profile.created_at).format("MMM DD, YYYY");
  var followers = profile.followers;
  var following = profile.following;

// aside--------------------
$(".photo img").attr('src',  avatarURL);
$(".name").text(name);
$(".username").text(username);
$(".email").html("<li class=\"octicon octicon-mail\"></li> " + email);
$(".joinDate").html("<li class=\"octicon octicon-clock\"></li> "+ joinedDate);
$(".followers").html(followers)
$(".following").html(following)

// will put all the repos on the page with the language used, the stargazers_count, forks_count, and date it was updated
  nameArr = "";
  _.each(reposArr, function(currItem, idx, arr) {
    nameArr +=  "<li>"
      + "<div class='stats'>"
      + currItem.language
      + " <a href='#'><span class='octicon octicon-star'></span></a> "
      + currItem.stargazers_count
      + ' <a href="#"><span class="octicon octicon-git-branch"></span></a> '
      + currItem.forks_count
      + '</div>'
      + '<h3>' + currItem.name + '</h3>'
      + '<p>updated ' + moment(currItem.updated_at).fromNow() + '</p>'
      + '</li>';
  });

  $('.repository ul').html(nameArr);
  // .html is saying that you are replacing the .repository class ul with the nameArr function


});
