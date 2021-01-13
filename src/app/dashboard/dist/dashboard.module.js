"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var video_dashboard_component_1 = require("./video-dashboard/video-dashboard.component");
var video_list_component_1 = require("./video-list/video-list.component");
var video_player_component_1 = require("./video-player/video-player.component");
var stat_filters_component_1 = require("./stat-filters/stat-filters.component");
var router_1 = require("@angular/router");
var routes = [{ path: '', component: video_dashboard_component_1.VideoDashboardComponent }];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            declarations: [video_dashboard_component_1.VideoDashboardComponent,
                video_list_component_1.VideoListComponent,
                video_player_component_1.VideoPlayerComponent,
                stat_filters_component_1.StatFiltersComponent],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(routes)
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
