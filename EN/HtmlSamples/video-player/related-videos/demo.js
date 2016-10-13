$(function () {
            $("#player1").igVideoPlayer({
                sources: [
                    "http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_1.h264.mp4",
                    "http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_1.webmvp8.webm",
                    "http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_1.theora.ogv"
                ],
                width: 720,
                height: 560,
<<<<<<< HEAD
                posterUrl: "http://staging.igniteui.local/16-2/images/samples/video-player/quince-intro-1.png",
=======
                posterUrl: "http://dev.igniteui.local/16-2/images/samples/video-player/quince-intro-1.png",
>>>>>>> 33e2affe828c3a6d046103189a8e30cf4af727fb
                fullscreen: false,
                browserControls: false,
                autohide: true,
                autoplay: false,
                showSeekTime: true,
                title: "Quince Presentation Part 1",
                relatedVideos: [{
<<<<<<< HEAD
                    imageUrl: "http://staging.igniteui.local/16-2/images/samples/video-player/quince-intro-2.png",
=======
                    imageUrl: "http://dev.igniteui.local/16-2/images/samples/video-player/quince-intro-2.png",
>>>>>>> 33e2affe828c3a6d046103189a8e30cf4af727fb
                    title: "Quince Presentation Part 1",
                    css: "relatedVideosBanner",
                    sources: [
                        "http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_Part3_1.h264.mp4",
                        "http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_Part3_1.webmvp8.webm",
                        "http://dl.infragistics.com/pg/2011-1/web/shared/videoplayer/videos/QuinceIntro_Part3_1.theora.ogv"
                    ]
                }]
            });
        });