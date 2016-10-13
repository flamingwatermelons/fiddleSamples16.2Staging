$(function () {
var alternate = true;
        $(function () {
            $("#player1").igVideoPlayer({
                sources: [
                    'http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/Infragistics_Presentation_lowRes_1.h264.mp4',
                    'http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/Infragistics_Presentation_lowRes_1.webmvp8.webm',
                    'http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/Infragistics_Presentation_lowRes_1.theora.ogv'
                ],
                width: "100%",
<<<<<<< HEAD
                posterUrl: 'http://staging.igniteui.local/16-2/images/samples/video-player/ig-pres.png',
=======
                posterUrl: 'http://dev.igniteui.local/16-2/images/samples/video-player/ig-pres.png',
>>>>>>> 33e2affe828c3a6d046103189a8e30cf4af727fb
                fullscreen: false,
                browserControls: false,
                autohide: true,
                autoplay: false,
                autohideDelay: 2000,
                title: 'Infragistics Presentation',
                banners: [{
<<<<<<< HEAD
                    imageUrl: 'http://staging.igniteui.local/16-2/images/samples/video-player/banner.png',
=======
                    imageUrl: 'http://dev.igniteui.local/16-2/images/samples/video-player/banner.png',
>>>>>>> 33e2affe828c3a6d046103189a8e30cf4af727fb
                    link: 'http://www.infragistics.com/',
                    times: [5, 20, 60],
                    visible: false,
                    closeBanner: true,
                    animate: true,
                    autohide: true,
                    hidedelay: 10000,
                    width: "270px",
                    height: "67px"
                }],
                bannerVisible: function (sender, eventArgs) {
                    if (alternate === true) {
                        eventArgs.bannerElement.css('top', 130);
                    }
                    else {
                        eventArgs.bannerElement.css('top', 0);
                    }

                    alternate = !alternate;
                },
                bannerClick: function (sender, eventArgs) {
                    $("#player1").igVideoPlayer('pause');
                }
            });
        });
});