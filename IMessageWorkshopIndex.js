(function () {
    var COMFORTABLE_EMOTION_LIST = ["Accepted","Acknowledged","Amused","Appreciated","Attracted","Attractive","Calm","Capable","Caring","Competent","Confident","Connected","Considered","Content","Creative","Curious","Delighted","Empowered","Encouraged","Enthusiastic","Excited","Exhilarated","Grateful","Happy","Hopeful","Important","Included","Independent","Inspired","Interested","Liberated","Loved","Nurtured","Passionate","Protected","Proud","Reassured","Relaxed","Relieved","Respected","Safe","Satisfied","Secure","Stimulated","Supported","Surprised","Trusted","Trusting","Understood","Valued","Welcome"];
    var UNCOMFORTABLE_EMOTION_LIST = ["Abandoned","Afraid","Anxious","Belittled","Betrayed","Concerned","Confused","Controlled","Deceived","Defeated","Defensive","Devastated","Disappointed","Disconnected","Discounted","Discouraged","Disrespected","Embarrassed","Excluded","Foolish","Frustrated","Grief","Guilty","Humiliated","Inadequate","Inferior","Insecure","Jealous","Lonely","Manipulated","Nervous","Obligated","Offended","Overwhelmed","Panic","Powerless","Pressured","Regret","Rejected","Resentful","Sad","Shame","Shocked","Surprised","Trapped","Unappreciated","Unattractive","Violated","Vulnerable","Worried"];
    var COMBINED_EMOTION_LIST = COMFORTABLE_EMOTION_LIST.concat(UNCOMFORTABLE_EMOTION_LIST);

    var updateMessage = function(emotionList){
        var emotion = emotionList[Math.floor(Math.random() * emotionList.length)];

        var output = "I feel " + emotion + " when _________________ because ___________________";
        $("#imessage").html(output).removeClass("invisible");
    };

    var bindHandlers = function(){
        $("#imessage-form").submit(function(event){ 
            event.preventDefault(); 
            console.log(event);

            var comfortable = $("#btn-comfortable").hasClass("active");
            var uncomfortable = $("#btn-uncomfortable").hasClass("active");

            if(comfortable && uncomfortable){
                updateMessage(COMBINED_EMOTION_LIST);
            } else if(COMFORTABLE_EMOTION_LIST){
                updateMessage(comfortable);
            } else if(UNCOMFORTABLE_EMOTION_LIST){
                updateMessage(uncomfortable);
            } else {
                updateMessage(COMBINED_EMOTION_LIST);
            }
        });
    };

    $(bindHandlers);
}());