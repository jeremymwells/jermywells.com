import {Component} from 'angular2/core';
import {SideNavComponent} from './sideNav/sideNav';
import {MapClustersComponent} from './mapClusters/mapClusters';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  selector: 'jermy-wells-dot-com-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/jermywellsdotcom.html',
  directives: [ROUTER_DIRECTIVES, RouterOutlet, SideNavComponent, MapClustersComponent],
  pipes: []
})

@RouteConfig([
	{ path: '/map-clusters', component: MapClustersComponent, name: 'MapClusters', useAsDefault: true },
	{ path: '/**', redirectTo: ['MapClusters'] }
])

export class JermyWellsDotComApp {

}
