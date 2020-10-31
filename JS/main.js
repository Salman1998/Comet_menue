var outBox = document.getElementById("outBox");
var srchBox = document.getElementById("srchBox");

function appclick(){
    document.getElementById("appsclick").classList.toggle('appdis');
    document.body.style.overflowY = "hidden";
}
function logsin(){
    document.getElementById('logSin').classList.toggle('logsind');
}
function srchDe(){
    outBox.classList.add('showSd');
    srchBox.classList.add('showSd');
    document.body.style.overflowY = "hidden";
}
function srchDK(){
    outBox.classList.remove('showSd');
    srchBox.classList.remove('showSd');
    document.body.style.overflowY = "auto";
}
document.getElementById('menuBar').addEventListener('click',function(){
    document.getElementById('navbar').classList.toggle('shownavbar');
    document.getElementById("navbar").style.borderTop = "1px solid rgba(255,255,255,0.5)"
})
var solutinsm = document.getElementById('solutinsm');
var solutins = document.getElementById('solutins');

solutinsm.addEventListener("mouseover",function(){
    solutins.style.display = 'flex';
})
solutinsm.addEventListener("mouseout",function(){
    solutins.style.display = 'none';
})
document.getElementById('solutins').addEventListener("mouseover",function(){
    solutins.style.display = 'flex';
})
document.getElementById('solutins').addEventListener("mouseout",function(){
    solutins.style.display = 'none';
})

document.getElementById('game').addEventListener("mouseover",function(){
    document.getElementById('gameb').style.display = 'block';
    document.getElementById('main').style.display = 'none';
})
document.getElementById('game').addEventListener("mouseout",function(){
    document.getElementById('gameb').style.display = 'none';
    document.getElementById('main').style.display = 'block';
})

document.getElementById('film').addEventListener("mouseover",function(){
    document.getElementById('filmb').style.display = 'block';
    document.getElementById('main').style.display = 'none';
})
document.getElementById('film').addEventListener("mouseout",function(){
    document.getElementById('filmb').style.display = 'none';
    document.getElementById('main').style.display = 'block';
})
document.getElementById('architecture').addEventListener("mouseover",function(){
    document.getElementById('main').style.display = 'none';
    document.getElementById('architectureb').style.display = 'block';
    
})
document.getElementById('architecture').addEventListener("mouseout",function(){
    document.getElementById('main').style.display = 'block';
    document.getElementById('architectureb').style.display = 'none';  
})
document.getElementById('Brand').addEventListener("mouseover",function(){
    document.getElementById('main').style.display = 'none';
    document.getElementById('Brandb').style.display = 'block';
    
})
document.getElementById('Brand').addEventListener("mouseout",function(){
    document.getElementById('main').style.display = 'block';
    document.getElementById('Brandb').style.display = 'none';  
})
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var learningm = document.getElementById('learningm');
var learning = document.getElementById('learning');

learningm.addEventListener("mouseover",function(){
   learning.style.display = 'flex';
})
learningm.addEventListener("mouseout",function(){
    learning.style.display = 'none';
})
learning.addEventListener("mouseover",function(){
    learning.style.display = 'flex';
})
learning.addEventListener("mouseout",function(){
    learning.style.display = 'none';
})

document.getElementById("educators").addEventListener("mouseover",function(){
    document.getElementById("educatorsb").style.display = "block";
    document.getElementById('learnersb').style.display = "none";
})
document.getElementById("educators").addEventListener("mouseout",function(){
    document.getElementById("educatorsb").style.display = "none";
    document.getElementById('learnersb').style.display = "block";
})
document.getElementById("teams").addEventListener("mouseover",function(){
    document.getElementById("teamsb").style.display = "block";
    document.getElementById('learnersb').style.display = "none";
})
document.getElementById("teams").addEventListener("mouseout",function(){
    document.getElementById("teamsb").style.display = "none";
    document.getElementById('learnersb').style.display = "block";
})
document.getElementById("unity").addEventListener("mouseover",function(){
    document.getElementById("unityb").style.display = "block";
    document.getElementById('learnersb').style.display = "none";
})
document.getElementById("unity").addEventListener("mouseout",function(){
    document.getElementById("unityb").style.display = "none";
    document.getElementById('learnersb').style.display = "block";
})
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var Supportm = document.getElementById('Supportm');
var Support = document.getElementById('Support');

Supportm.addEventListener("mouseover",function(){
   Support.style.display = 'flex';
})
Supportm.addEventListener("mouseout",function(){
    Support.style.display = 'none';
})
Support.addEventListener("mouseover",function(){
    Support.style.display = 'flex';
})
Support.addEventListener("mouseout",function(){
    Support.style.display = 'none';
})

document.getElementById("documentation").addEventListener("mouseover",function(){
    document.getElementById("documentationb").style.display = "block";
    document.getElementById('supportb').style.display = "none";
})
document.getElementById("documentation").addEventListener("mouseout",function(){
    document.getElementById("documentationb").style.display = "none";
    document.getElementById('supportb').style.display = "block";
})
document.getElementById("knowledge").addEventListener("mouseover",function(){
    document.getElementById("knowledgeb").style.display = "block";
    document.getElementById('supportb').style.display = "none";
})
document.getElementById("knowledge").addEventListener("mouseout",function(){
    document.getElementById("knowledgeb").style.display = "none";
    document.getElementById('supportb').style.display = "block";
})
document.getElementById("issue").addEventListener("mouseover",function(){
    document.getElementById("issueb").style.display = "block";
    document.getElementById('supportb').style.display = "none";
})
document.getElementById("issue").addEventListener("mouseout",function(){
    document.getElementById("issueb").style.display = "none";
    document.getElementById('supportb').style.display = "block";
})
document.getElementById("live").addEventListener("mouseover",function(){
    document.getElementById("liveb").style.display = "block";
    document.getElementById('supportb').style.display = "none";
})
document.getElementById("live").addEventListener("mouseout",function(){
    document.getElementById("liveb").style.display = "none";
    document.getElementById('supportb').style.display = "block";
})
/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/
var communitym = document.getElementById('communitym');
var community = document.getElementById('community');

communitym.addEventListener("mouseover",function(){
   community.style.display = 'flex';
})
communitym.addEventListener("mouseout",function(){
    community.style.display = 'none';
})
community.addEventListener("mouseover",function(){
    community.style.display = 'flex';
})
community.addEventListener("mouseout",function(){
    community.style.display = 'none';
})
document.getElementById("blog").addEventListener("mouseover",function(){
    document.getElementById("blogb").style.display = "block";
    document.getElementById('communityb').style.display = "none";
})
document.getElementById("blog").addEventListener("mouseout",function(){
    document.getElementById("blogb").style.display = "none";
    document.getElementById('communityb').style.display = "block";
})
document.getElementById("forums").addEventListener("mouseover",function(){
    document.getElementById("forumsb").style.display = "block";
    document.getElementById('communityb').style.display = "none";
})
document.getElementById("forums").addEventListener("mouseout",function(){
    document.getElementById("forumsb").style.display = "none";
    document.getElementById('communityb').style.display = "block";
})
document.getElementById("answers").addEventListener("mouseover",function(){
    document.getElementById("answersb").style.display = "block";
    document.getElementById('communityb').style.display = "none";
})
document.getElementById("answers").addEventListener("mouseout",function(){
    document.getElementById("answersb").style.display = "none";
    document.getElementById('communityb').style.display = "block";
})
document.getElementById("groups").addEventListener("mouseover",function(){
    document.getElementById("groupsb").style.display = "block";
    document.getElementById('communityb').style.display = "none";
})
document.getElementById("groups").addEventListener("mouseout",function(){
    document.getElementById("groupsb").style.display = "none";
    document.getElementById('communityb').style.display = "block";
})
document.getElementById("program").addEventListener("mouseover",function(){
    document.getElementById("programb").style.display = "block";
    document.getElementById('communityb').style.display = "none";
})
document.getElementById("program").addEventListener("mouseout",function(){
    document.getElementById("programb").style.display = "none";
    document.getElementById('communityb').style.display = "block";
})
document.getElementById("advisory").addEventListener("mouseover",function(){
    document.getElementById("advisoryb").style.display = "block";
    document.getElementById('communityb').style.display = "none";
})
document.getElementById("advisory").addEventListener("mouseout",function(){
    document.getElementById("advisoryb").style.display = "none";
    document.getElementById('communityb').style.display = "block";
})
