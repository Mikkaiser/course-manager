import { Component, OnInit } from "@angular/core";
import { Course } from './Course';
@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
})
export default class CourseListComponent implements OnInit{
    courses: Course[] = [];

    ngOnInit() : void {
        this.courses = [
            {
                id: 1,
                name: 'Mikael Course',
                imageUrl: '',
                price: 47.90,
                code: 'XPS-5467',
                duration: 56,
                rating: 5.0,
                release: 'December, 2, 2020'
            },
            {
                id: 2,
                name: 'Ribeiro Course',
                imageUrl: '',
                price: 56.99,
                code: 'XPS-8667',
                duration: 120,
                rating: 4.0,
                release: 'January, 5, 2021'
            }
        ]
    }
}