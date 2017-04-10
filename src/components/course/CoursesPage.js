import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as courseActions from '../../actions/courseActions'
import CourseList from './CourseList'


class CoursesPage extends Component {
    constructor(props, context) {
        super(props, context)
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this)
    }

    courseRow(course, index) {
        return <div key={index}> {course.title} </div>
    }
    redirectToAddCoursePage() {
        browserHistory.push('/course/')
    }

    render() {
        const courses = this.props.courses
        return (
            <div>
                <h1>Courses</h1>
                <input
                    type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage}
                />
                <CourseList courses={courses}></CourseList>
            </div>
        )
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

function mapStateToProps (state, ownProps) {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CoursesPage)