$ (document).ready (function ()
{
    $ ("button.togglepower").click (function ()
    {
        $.post ("/command/togglepower", function (data)
        {
            $ ('div.mydata').text (data);
        });
    });
    $ ("button.toggleinput").click (function ()
    {
        $.post ("/command/toggleinput", function (data)
        {
            $ ('div.mydata').text (data);
        });
    });
    $ ("button.togglemute").click (function ()
    {
        $.post ("/command/togglemute", function (data)
        {
            $ ('div.mydata').text (data);
        });
    });
    $ ("button.volup").click (function () {
        $.post ("/command/volumeup", function (data) {
            $ ('div.mydata').text (data);
        });
    });
    $ ("button.voldown").click (function () {
        $.post ("/command/volumedown", function (data) {
            $ ('div.mydata').text (data);
        });
    });

    $ ("button.status").click (function()
    {
        $.post ("/command/powerstatus", function (data) {
            switch(data)
            {
                case "00":
                    $ ('button.togglepower').text ("Power On");
                    break;
                case "01":
                    $ ('button.togglepower').text ("Power Off");
                    break;
                default:
            }
            $ ('div.powerstatus').text ("Powerstatus: " + data);
        });
        $.post ("/command/inputstatus", function (data) {
            $ ('div.inputstatus').text ("Inputstatus: " + data);
            switch(data)
            {
                case "90":
                    $ ('button.toggleinput').text ("Apple TV");
                    break;
                case "91":
                    $ ('button.toggleinput').text ("IpTV");
                    break;
                default:
            }
        });
        $.post ("/command/aspectstatus", function (data) {
                $ ('div.aspectstatus').text ("Aspectstatus: " + data);
        });
        $.post ("/command/mutestatus", function (data) {
            $ ('div.mutestatus').text ("Mutestatus: " + data);
            switch(data)
            {
                case "00":
                    $ ('button.togglemute').text ("Unmute");
                    break;
                case "01":
                    $ ('button.togglemute').text ("Mute");
                    break;
                default:
            }
        });
    });
});




