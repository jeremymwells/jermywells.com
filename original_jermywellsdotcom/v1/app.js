angular
  .module('resume', ['ngMaterial', 'ngSanitize'])
  .controller('mainCtrl', function($scope, techs, education, meetups, experience) {
    this.techs = techs;
    this.education = education;
    this.meetups = meetups;
    this.experience = experience;
    var getClasses = function(techs){
      var c = [];
      for (var i =0; i < techs.length; i++){
        c.push('thing' + (Math.floor(Math.random() * 3) + 1));
      }
      return c;  
    }
    this.classes = getClasses(this.techs);
  })
  .factory('techs',function(){
    return [
      'NodeJS','Express','RxJS','Angular','AngularJS','Ngrx','Ngxs', 'HTML','CSS, Sass, Less, Flexbox','JavaScript','Solr',
      'Material Design', 'Angular Material Design', 'Human Centered Design','SQL Server','MySQL','C#','Docker','Continuous Integration','Continuous Delivery',
      'Kubernetes', 'Docker', 'OSX','Ubuntu','Jasmine','Ruby On Rails','RESTful api design',
      'Windows','ASP.NET','WebApi', 'WMB','Azure AD','Azure B2C',
      'MSSQL Server', 'MongoDB','TDD', 'BDD', 'jRuby', 'Docker', 'SOAP',
      'Multi-tenant applications','ORM Frameworks', 'Go', 'Python',
      'RabbitMQ','MQ','Linq-To-Sql','Entity Framework', 'MarkLogic'
    ];
  })
  .factory('education', function(){
    return { 
      '[CCBC, Monaca PA]': [ 
        { year:'05/2011', desc: 'AAS: CIS'}, 
        { year:'12/2010', desc: '.NET Certificate'},
        { year:'12/2009', desc: 'AAS: Business Mgmt'}
      ],
      '[SRU, Slippery Rock PA]': [ 
        { year:'12/2001', desc: 'Communication'}
      ]
    };
  })
  .factory('meetups', function(){
    return {
      '[github.com/jeremymwells]': [  { timespan:'', name: '' } ],
      '[codepen.io/jermywells]':[  { timespan:'', name: '' } ],
      '[ngPittsburgh meetup]': [ 
        { timespan:'08/2014-present', name: 'Member' },
        { timespan:'10/2015', name: 'Speaker, Angular Material' },
        { timespan:'01/2016', name: 'Speaker, RxJS' }
      ],
      '[PghDevUX meetup]': [ 
        { timespan:'10/2015-present', name: 'Member' }
      ],
      '[pghdotnet meetup]': [ 
        { timespan:'12/2012-present', name: 'Member' },
        { timespan:'07/2014', name: 'Speaker, Jasmine' },
        { timespan:'03/2014', name: 'Speaker, OOP in JS' }
      ],
      '[node.pgh meetup]': [ 
        { timespan:'04/2014-present', name: 'Member' },
        { timespan:'10/2011', name: 'Presenter, RxJS v5' }
      ],
      '[Angular CLI]': [ 
        { timespan:'', name: 'Contributor' }
      ],
      '[RxJS v5]': [ 
        { timespan:'', name: 'Contributor' }
      ]
    };
  })
  .factory('experience', function(){
    return [
      {
        timespan: 'January 2018 - present', 
        company: 'UPMC Enterprises', 
        title: 'Manager, Software Engineer - Lead',
        bullets: [
          { point: 'Managed 12 people; 3 full-stack teams' },
          { point: 'Led microservices server and web client implementations' },
          { point: 'Implemented CICD pipelines using Kustomize and SSM to build web/microservice images and deploy to Kubernetes' },
          { point: 'Measured effectiveness and efficiency using scrum agile process, and coached where necessary' },
          { point: 'Coordinated Product and Engineering teams to create roadmap, estimate work, and execute strategic delivery' },
          { point: 'Drove best practices implementing, documenting, and testing software' },
          { point: 'Supported the MyUPMC application; a consumer-facing application with 15k+ daily users, multiple integrations and interoperability with multiple EMR\'s, Healthplan systems, and others' },
          { point: 'Provided expertise in areas of front-end software development, tooling, etc' },
          { point: 'Implemented features and enhancements, ensuring code coverage, maintainability, and adherence to accepted SDLC practices' },
          { point: 'Used NodeJS, Express, Flex Layout, Angular Material, Azure AD, Angular (v1, v5, v7), JavaScript, TypeScript, Docker, Kubernetes, Spring Boot' }          
        ]
      },
      {
        timespan: 'October 2017 - January 2018', 
        company: 'Opus', 
        title: 'Principle Software Engineer',
        bullets: [
          { point: 'Implemented file upload and question reordering features for a survey application using Angular 5 components, NGRX, and C# ASP.NET' },
          { point: 'Researched BPMN, DMN, and FEEL' },
          { point: 'Created a prototype that parsed FEEL, allowing users to write logical rules in Friendly Enough Expression Language, and execute model-based decisions on data contexts' },
          { point: 'Used NodeTS, Angular 5, Ngrx, SQL Server, C#, Windows, Octopus, Docker' }          
        ]
      },
      {
        timespan: 'October 2017 - January 2018', 
        company: 'This Dot', 
        title: 'Software Engineer',
        bullets: [
          { point: 'Implemented reusable form components, validation components, and date calculation functionality in a loan origination application' },
          { point: 'Used knowledge of mobile platforms to implement responsive experience' },
          { point: 'Reduced unhandled errors' },
          { point: 'Automated Docker build' },
          { point: 'Used bash, Docker, Angular 5, Ngrx' }
        ]
      },
      {
        timespan: 'October 2016 - October 2017,<br />June 2014 - February 2016', 
        company: 'Computer Enterprises, Inc (CEI)', 
        title: 'Architect, Associate Architect',
        bullets: [
          { point: 'Provided expertise in areas of web api development, SPA development and design principles' },
          { point: 'Implemented CI/CD workflows' },
          { point: 'Implemented B2C Authentication and Authorization' },
          { point: 'Worked with design teams to create functional SPA prototypes, for various design concepts' },
          { point: 'Worked to create a custom Vidyo implementation in AngularJS' }, 
          { point: 'Designed and implemented features and enhancements, ensuring code coverage and maintainability, adhering to SDLC practices' },
          { point: 'Helped facilitate multi-tenancy in a large distributed application' },
          { point: 'Standardized front end concerns' },
          { point: 'Fixed bugs and defects' },
          { point: 'Used C#, SQL Server, Ruby on Rails, Active Record, AngularJS (v1 & v2), Cucumber, Rspec, MySql, JavaScript, MongoDB, RabbitMQ, Docker, jRuby' }          
        ]
      },
      {
        timespan: 'May 2016 - October 2016', 
        company: 'Open Arc', 
        title: 'Solutions Architect',
        bullets: [
          { point: 'Implemented user license activation feature for teen abstinance promotion software' },
          { point: 'Implemented sentence and paragraph parsing for language translation software' },
          { point: 'Developed internal sales support process' },
          { point: 'Fixed bugs and defects' },
          { point: 'Used Angular JS, Ionic, Ruby On Rails, ActiveRecord, Postgres' }          
        ]
      },
       {
        timespan: 'February 2016 - June 2016', 
        company: 'Arcadia Healthcare Solutions', 
        title: 'Senior Software Engineer',
        bullets: [
          { point: 'Worked on a healthcare provider network analytics application' },
          { point: 'Provided expertise in areas of web api and SPA development and design principles' },
          { point: 'Fixed bugs and defects' },
          { point: 'Used Ruby on Rails, Active Record, AngularJS, CoffeeScript' }          
        ]
      },      
      {
        timespan: 'March 2013 - June 2014', 
        company: 'Beacon Hill Staffing', 
        title: 'Senior Applications Developer',
        bullets: [
          { point: 'Worked with product owners, gathered software requirements, created documentation' },
          { point: 'Designed, implemented and maintained features and enhancements' },
          { point: 'Fixed bugs and defects' },
          { point: 'Used C#, Ajax, Linq-To-Sql, Entity Framework' }
        ]
      },
      {
        timespan: 'March 2012 - March 2013', 
        company: 'All Covered', 
        title: 'Senior Technical Engineer',
        bullets: [
          { point: 'Designed and implemented continuous integration plan and strategy for new and existing code' }, 
          { point: 'Designed and implemented deployable artifact creation and versioning' },
          { point: 'Implemented SDLC and agile processes in distributed team environments' },
          { point: 'Facilitated planning, scrums, software implementation, buy-in, adherence' },
          { point: 'Implemented style standards' },
          { point: 'Worked with product owners, gathered software requirements, created documentation' },
          { point: 'Standardized JavaScript and front-end concerns.' },
          { point: 'Implemented precompiled, route-aware asset bundling' },
          { point: 'Used C#, MVC, MSSql, Entity Framework, SOAP, WCF, JavaScript, HTML, CSS, AJAX' }
        ]
      },
      {
        timespan: 'March 2011 - March 2012', 
        company: 'Autosoft', 
        title: 'Developer',
        bullets: [
          { point: 'Responsible for full stack application development'},
          { point: 'Led all ESB layer and integrations development efforts' },
          { point: 'Used Fluent NHibernate as a data access framework/ORM' },
          { point: 'Used knowledge of RESTful services, C#, MQ and WMB to implement workflows and WCF ' +
                   'services which facilitated ESB communication between proprietary 2nd and 3rd party ' +
                   'applications and non-proprietary 3rd party applications, which included auto ' +
                   'manufacturers like Ford, Toyota, Honda and GM to synchronize inventory, stock, '+
                   'vehice service history, warranty information, etc'
          },
          { point: 'Maintained current integrations' },
          { point: 'Implemented new integrations' }, 
          { point: 'Used C#, XML, ASP.NET, JQuery, MVC, MSSql, Entity Framework, SOAP, WCF, JavaScript, HTML, CSS, AJAX, WMB' }
        ]
      },
      {
        timespan: 'April 2009 - March 2011', 
        company: 'ServiceLink (FNF)', 
        title: 'Infrastructure Architect',
        bullets: [
          { point: 'Developed software that created flexible solutions' },
          { point: 'Developed a web application allowing developers to interact with log data and other infrastructure concerns in real time' },
          { point: 'Helped implement AWSTATS/JAWSTATS analytics and GEOIP analysis' },
          { point: 'Helped implement Nagios monitoring of 300+ servers and 600+ applications' }
        ]
      }
    ]
  })
;