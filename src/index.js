// index.js
import './styles/index.css'
import FormHandler from './Form/FormHandler'
import ProjectListHandler from './Projects/ProjectListHandler'

const formHandler = new FormHandler;
formHandler.handleFormEvents();

const projectListHandler = new ProjectListHandler;
projectListHandler.handleProjectListEvents();