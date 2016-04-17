import {Component}     from 'angular2/core';
import {RouteConfig, ROUTER_PROVIDERS, RouterOutlet} from 'angular2/router';

@Component({
	templateUrl: 'app/mapClusters/mapClusters.html',
	directives: [RouterOutlet],
	providers: [ROUTER_PROVIDERS],
	pipes: []
})

export class MapClustersComponent { 
	baseUrl: string = 'http://thejerm.com:8080'
}