"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.VideoListComponent = void 0;
var core_1 = require("@angular/core");
var data_1 = require("../data");
var VideoListComponent = /** @class */ (function () {
    function VideoListComponent() {
        this.videos = data_1.videoData;
        this.selectedVideo = null;
    }
    VideoListComponent.prototype.videoClicked = function (video) {
        this.selectedVideo = video;
    };
    VideoListComponent = __decorate([
        core_1.Component({
            selector: 'app-video-list',
            templateUrl: './video-list.component.html',
            styleUrls: ['./video-list.component.scss']
        })
    ], VideoListComponent);
    return VideoListComponent;
}());
exports.VideoListComponent = VideoListComponent;
