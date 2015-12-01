
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
      'RxJS',	'Emacs', 'vsCode','ASP.NET', 'MVC', 'WebApi', 'WCF', 'WMB',
      'MSSQL Server', 'MongoDB','TDD', 'BDD',	'jRuby', 'Docker', 'SOAP',
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
      '[ngPittsburgh.com]': [ 
        { timespan:'08/2014-present', name: '(Co)Organizer' },
        { timespan:'10/2015', name: 'Speaker, Angular Material' },
        { timespan:'01/2016', name: 'Speaker, RxJS' }
      ],
      '[PghDevUX.com]': [ 
        { timespan:'10/2015-present', name: '(Co)Organizer' }
      ],
      '[pghdotnet]': [ 
        { timespan:'12/2012-present', name: 'Member' },
        { timespan:'07/2014', name: 'Speaker, Jasmine' },
        { timespan:'03/2014', name: 'Speaker, OOP in JS' }
      ],
      '[node.pgh]': [ 
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
          { point: 'Fixed bugs/defects.' },           
          { point: 'Helped facilitate multi-tenancy in a large sharded MongoDB cluster' },
          { point: 'Standardized front end concerns.' },
          { point: 'Used Ruby on Rails, Active Record, Cucumber, Rspec, MySql, JavaScript, MongoDB, RabbitMQ, Docker' }          
        ]
      },
      {
        timespan: 'March 2013 - June 2014', 
        company: 'Amerinet via Beacon Hill Staffing', 
        title: 'Senior Applications Developer',
        bullets: [
          { point: 'Provided expertise in areas of web api and SPA development and design principles' },
          { point: 'Instructed team on AngularJs' },
          { point: 'Led front end efforts on a federated mobile-first membership application intended to integrate disparate applications data and act as the system of record'}, 
          { point: 'Worked with product owners, gathered software requirements, created documentation' },
          { point: 'Maintained and enhanced production applications' }, 
          { point: 'Designed and implemented features and enhancements' },
          { point: 'Fixed bugs' },
          { point: 'Used Linq-To-Sql and Entity Framework as data access framework/ORM' }
        ]
      },
      {
        timespan: 'March 2012 - March 2013', 
        company: 'All Covered', 
        title: 'Senior Technical Engineer',
        bullets: [
          { point: 'Designed and Implemented Continuous Integration plan and strategy for new and existing code' }, 
          { point: 'Designed and Implemented deployable artifact creation and versioning'},
          { point: 'Implemented SDLC and Agile processes in distributed team environments' },
          { point: 'Facilitated planning, scrums, software implementation, buy-in, adherence' },
          { point: 'Implemented coding standards' },
          { point: 'Worked with product owners, gathered software requirements, created documentation' },
          { point: 'Standardized JavaScript and front end concerns.' },
          { point: 'Implemented precompiled, route-aware asset bundling' },
          { point: 'Used Ruby on Rails, Active Record, Cucumber, Rspec, MySql, JavaScript' }
        ]
      },
      
      {
        timespan: 'March 2011 - March 2012', 
        company: 'Autosoft', 
        title: 'Developer',
        bullets: [
          { point: 'Responsible for full stack application development using C#, XML, SOAP, WCF, ASP.NET, JQuery, AJAX, and SQL Server'},
          { point: 'Led all ESB layer and integrations development efforts' },
          { point: 'Used Fluent NHibernate as a data access framework/ORM' },
          { point: 'Used knowledge of RESTful services, C#, MQ and WMB to implement workflows and WCF ' +
                   'services which facilitated ESB communication between proprietary 2nd and 3rd party ' +
                   'applications and non-proprietary 3rd party applications, which included auto ' +
                   'manufacturers like Ford, Toyota, Honda and GM to synchronize inventory, stock, '+
                   'vehice service history, warranty information, etc'
          },
          { point: 'Maintained current integrations' },
          { point: 'Implemented new integrations' }     
        ]
      },
      {
        timespan: 'April 2009 - April 2011', 
        company: 'ServiceLink (FNF)', 
        title: 'Infrastructure Architect',
        bullets: [
          { point: 'Developed software on a task-force team intended to be flexible and provide needed solutions to make development efforts more efficient' },
          { point: 'Developed a service oriented application to deploy/move code through development, staging, and UAT environments using WCF with both web and winform clients' },
          { point: 'Designed/Implemented C# applications and services to move log data through subnets/combine log data/parse and analyze log data' },
          { point: 'Was integral in implementing AWSTATS/JAWSTATS analytics and GEOIP analysis' },
          { point: 'Was integral in implementing for Nagios monitoring and reported on upwards of 300 servers and twice as many services/applications' },
          { point: 'Developed/implemented a web portal application which tied together all of the responsibilities above, creating a single touch point for all preproduction data and activities' }, 
          { point: 'Provided support' },
          { point: 'Worked closely with various departments to create and implement solutions that ensured functionality, improved efficiency and increased productivity overall' },
          { point: 'Personally spec\'d, ordered and set up satellite offices in Buffalo, New York and Rancho Cucamonga, California' },
          { point: 'Handled nearly all technical aspects associated with launching technical operations in these locations' }
        ]
      }
    ]
  })
;

