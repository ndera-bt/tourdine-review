"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
const typeorm_1 = require("typeorm");
const review_1 = require("./review");
let Restaurant = class Restaurant extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Restaurant.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Restaurant.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Restaurant.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Restaurant.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Restaurant.prototype, "hours", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Restaurant.prototype, "categories", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Restaurant.prototype, "stars", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Restaurant.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Restaurant.prototype, "review_count", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => review_1.Review, (review) => review.restaurant),
    __metadata("design:type", Array)
], Restaurant.prototype, "reviews", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Restaurant.prototype, "contact", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Restaurant.prototype, "photo", void 0);
Restaurant = __decorate([
    (0, typeorm_1.Entity)("restaurant")
], Restaurant);
exports.Restaurant = Restaurant;
