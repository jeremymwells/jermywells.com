
angular
  .module('resume', ['ngMaterial'])
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
      'C#','HTML','CSS','JQuery','JavaScript','AJAX','Windows', 'MQ', 'AJAX',
      'OSX','Ubuntu','Fedora','AngularJs','Jasmine','Bootstrap', 'ESB', 'WCF',
      'RxJS', 'Emacs', 'vsCode','ASP.NET', 'MVC', 'WebApi', 'WCF', 'WMB',
      'MSSQL Server', 'MongoDB','TDD', 'BDD', 'jRuby', 'Docker', 'SOAP',
      'Multi-tenant applications','ORM Frameworks', 'Go', 'Ruby on Rails', 
      'Sass','Less','MySQL', 'NodeJS', 'npm', 'Grunt', 'Gulp', 'Yeoman', 
      'Active Record', 'Cucumber', 'Rspec', 'RabbitMQ', 'Linq-To-Sql','Entity Framework'
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
      '[github.com/jeremymwells]': [{timespan:'',name:''}],
      '[codepen.io/jermywells]':[{timespan:'',name:''}],
      '[ngPittsburgh.com]': [ 
        { timespan:'08/2014-present', name: '(Co)Organizer' },
        { timespan:'10/2015', name: 'Speaker, Angular Material' },
        { timespan:'01/2016', name: 'Speaker, RxJS' }
      ],
      '[PghDevUX.com]': [ 
        { timespan:'10/2015-present', name: '(Co)Organizer' }
      ],
      '[pghdotnet meetup]': [ 
        { timespan:'12/2012-present', name: 'Member' },
        { timespan:'07/2014', name: 'Speaker, Jasmine' },
        { timespan:'03/2014', name: 'Speaker, OOP in JS' }
      ],
      '[node.pgh meetup]': [ 
        { timespan:'04/2014', name: 'Member' }
      ]
    };
  })
  .factory('experience', function(){
    return [
      {
        timespan: 'June 2014 - present', 
        company: 'Computer Enterprises, Inc (CEI)', 
        title: 'Associate Architect',
        bullets: [
          { point: 'Provided expertise in areas of web api and SPA development and design principles' },
          { point: 'Worked with design teams to create functional SPA prototypes for various design concepts' },
          { point: 'Worked to create a custom Vidyo implementation in AngularJs' }, 
          { point: 'Designed and implemented features and enhancements, ensuring code coverage and maintainability, adhering to SDLC practices' },
          { point: 'Helped facilitate multi-tenancy in a large distributed application' },
          { point: 'Standardized front end concerns' },
          { point: 'Fixed bugs and defects' },
          { point: 'Used Ruby on Rails, Active Record, Cucumber, Rspec, MySql, JavaScript, MongoDB, RabbitMQ, Docker, MongoDB, jRuby' }          
        ]
      },
      {
        timespan: 'March 2013 - June 2014', 
        company: 'Amerinet via Beacon Hill Staffing', 
        title: 'Senior Applications Developer',
        bullets: [
          { point: 'Provided expertise in areas of web api and SPA development and design principles' },
          { point: 'Instructed team on AngularJs' },
          { point: 'Led front end efforts on a federated mobile-first application, integrating disparate applications data'}, 
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
          { point: 'Designed and implemented deployable artifact creation and versioning'},
          { point: 'Implemented SDLC and agile processes in distributed team environments' },
          { point: 'Facilitated planning, scrums, software implementation, buy-in, adherence' },
          { point: 'Implemented coding standards' },
          { point: 'Worked with product owners, gathered software requirements, created documentation' },
          { point: 'Standardized javascript and front end concerns.' },
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
        timespan: 'April 2009 - April 2011', 
        company: 'ServiceLink (FNF)', 
        title: 'Infrastructure Architect',
        bullets: [
          { point: 'Developed software on a task-force team that created flexible solutions to streamline efficiency' },
          { point: 'Developed a SOA that promoted/demoted code between development, staging, and UAT' },
          { point: 'Designed/Implemented C# applications and services to move, parse, analyze and combine meaningful log data across subnets' },
          { point: 'Helped implement AWSTATS/JAWSTATS analytics and GEOIP analysis' },
          { point: 'Helped implement Nagios monitoring of 300+ servers and 600+ applications' },
          { point: 'Developed/implemented an integral web app encorporating all aforementioned responsibilities of this position' }, 
          { point: 'Provided support' },
          { point: 'Personally coordinated all tech acquisition necessary to and set up satellite offices in Buffalo, New York and Rancho Cucamonga, California' },
          { point: 'Handled nearly all technical aspects associated with launching technical operations in these locations' }
        ]
      }
    ]
  })
;
