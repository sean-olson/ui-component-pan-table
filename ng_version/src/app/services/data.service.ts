import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _users: User[] = []; 
  private _data: object[] = [
    {"id":1,"first_name":"Nolly","last_name":"Cowerd","email":"ncowerd0@elpais.com","gender":"Male","ip_address":"6.225.153.61","university":"Universidade do Estado da Bahia","job_title":"Teacher","shirt_size":"2XL","city":"Dalan","postal_code":null},
    {"id":2,"first_name":"Florida","last_name":"Schinetti","email":"fschinetti1@cmu.edu","gender":"Female","ip_address":"236.32.79.151","university":"Visvesvaraya National Institute of Technology","job_title":"Biostatistician IV","shirt_size":"XS","city":"Água Levada","postal_code":"4745-380"},
    {"id":3,"first_name":"Giorgio","last_name":"Romme","email":"gromme2@tamu.edu","gender":"Male","ip_address":"67.152.240.157","university":"Tama Art University","job_title":"Registered Nurse","shirt_size":"M","city":"Banī Walīd","postal_code":null},
    {"id":4,"first_name":"Auguste","last_name":"Critchlow","email":"acritchlow3@jugem.jp","gender":"Female","ip_address":"89.57.151.224","university":"Université du Québec à Trois-Rivières","job_title":"Marketing Assistant","shirt_size":"S","city":"Ban Phaeo","postal_code":"74120"},
    {"id":5,"first_name":"Emalia","last_name":"Giles","email":"egiles4@netvibes.com","gender":"Female","ip_address":"56.41.167.234","university":"Politeknik Negeri Jakarta","job_title":"Dental Hygienist","shirt_size":"3XL","city":"Daohe","postal_code":null},
    {"id":6,"first_name":"Malia","last_name":"Abisetti","email":"mabisetti5@yellowbook.com","gender":"Female","ip_address":"131.182.182.147","university":"Knoxville College","job_title":"Registered Nurse","shirt_size":"3XL","city":"Berlin","postal_code":"12437"},
    {"id":7,"first_name":"Florentia","last_name":"Pasque","email":"fpasque6@ycombinator.com","gender":"Female","ip_address":"202.55.170.28","university":"Leon Kozminski Academy of Entrepreneurship and Mangement in Warsaw","job_title":"Director of Sales","shirt_size":"L","city":"Stan-Bekhtemir","postal_code":"662174"},
    {"id":8,"first_name":"Nicolas","last_name":"Houlison","email":"nhoulison7@sfgate.com","gender":"Male","ip_address":"66.41.155.30","university":"Southeastern Baptist College","job_title":"Data Coordiator","shirt_size":"2XL","city":"New Iloilo","postal_code":"8710"},
    {"id":9,"first_name":"Derick","last_name":"Archbould","email":"darchbould8@japanpost.jp","gender":"Male","ip_address":"60.205.106.202","university":"Prince of Songkla University","job_title":"Safety Technician I","shirt_size":"XL","city":"San José Acatempa","postal_code":"22016"},
    {"id":10,"first_name":"Trista","last_name":"Gravell","email":"tgravell9@techcrunch.com","gender":"Female","ip_address":"132.234.228.37","university":"Panjab University","job_title":"Geologist I","shirt_size":"M","city":"Manikchari","postal_code":"7460"},
    {"id":11,"first_name":"Carmina","last_name":"Dellenbrook","email":"cdellenbrooka@fema.gov","gender":"Female","ip_address":"94.122.129.7","university":"Perm State University","job_title":"Accountant III","shirt_size":"XS","city":"Shanmei","postal_code":null},
    {"id":12,"first_name":"Hugh","last_name":"French","email":"hfrenchb@4shared.com","gender":"Male","ip_address":"231.214.56.244","university":"Royal College of Art","job_title":"Accounting Assistant II","shirt_size":"XS","city":"Giyon","postal_code":null},
    {"id":13,"first_name":"Deerdre","last_name":"Bottby","email":"dbottbyc@blogspot.com","gender":"Female","ip_address":"63.189.116.239","university":"Kumoh National University of Technology","job_title":"Software Engineer I","shirt_size":"XS","city":"Toungo","postal_code":null},
    {"id":14,"first_name":"Nil","last_name":"Wisdish","email":"nwisdishd@eepurl.com","gender":"Male","ip_address":"45.225.153.250","university":"Academia de Studii Economice din Bucuresti","job_title":"Chief Design Engineer","shirt_size":"L","city":"Haibeitou","postal_code":null},
    {"id":15,"first_name":"Scot","last_name":"Goreway","email":"sgorewaye@tripadvisor.com","gender":"Male","ip_address":"201.211.7.63","university":"Silver Lake College","job_title":"Physical Therapy Assistant","shirt_size":"XS","city":"Horad Smalyavichy","postal_code":null},
    {"id":16,"first_name":"Marcos","last_name":"Mival","email":"mmivalf@skype.com","gender":"Male","ip_address":"11.54.118.217","university":"Kyrgyz National University","job_title":"Dental Hygienist","shirt_size":"3XL","city":"Lysogorskaya","postal_code":"357838"},
    {"id":17,"first_name":"Ninette","last_name":"Pimley","email":"npimleyg@zimbio.com","gender":"Female","ip_address":"26.31.67.60","university":"Stephen F. Austin State University","job_title":"Sales Representative","shirt_size":"XL","city":"Velikiye Borki","postal_code":null},
    {"id":18,"first_name":"Rancell","last_name":"Davydoch","email":"rdavydochh@japanpost.jp","gender":"Male","ip_address":"109.75.105.48","university":"Tomsk State University","job_title":"Marketing Manager","shirt_size":"L","city":"Taixi","postal_code":null},
    {"id":19,"first_name":"Bastian","last_name":"Milkin","email":"bmilkini@blog.com","gender":"Male","ip_address":"84.116.71.70","university":"Merkur Internationale FH Karlsruhe","job_title":"Media Manager II","shirt_size":"S","city":"Bardalah","postal_code":null},
    {"id":20,"first_name":"Dalli","last_name":"Masson","email":"dmassonj@whitehouse.gov","gender":"Male","ip_address":"192.158.100.141","university":"Kirchliche Hochschule Wuppertal","job_title":"Professor","shirt_size":"L","city":"Stockholm","postal_code":"117 68"},
    {"id":21,"first_name":"Maisie","last_name":"Lindegard","email":"mlindegardk@cnn.com","gender":"Female","ip_address":"131.232.196.122","university":"Università Pontificia Salesiana","job_title":"Graphic Designer","shirt_size":"S","city":"Necochea","postal_code":"7630"},
    {"id":22,"first_name":"Avivah","last_name":"Ollington","email":"aollingtonl@usatoday.com","gender":"Female","ip_address":"242.123.206.249","university":"Shanghai University of Traditional Chinese Medicine and Pharmacology","job_title":"Desktop Support Technician","shirt_size":"3XL","city":"Lens","postal_code":"62335 CEDEX"},
    {"id":23,"first_name":"Melli","last_name":"Midford","email":"mmidfordm@senate.gov","gender":"Female","ip_address":"82.109.59.121","university":"Burapha University","job_title":"Professor","shirt_size":"3XL","city":"Pregrada","postal_code":"49218"},
    {"id":24,"first_name":"Whitney","last_name":"Cases","email":"wcasesn@bbc.co.uk","gender":"Female","ip_address":"152.179.12.38","university":"Hanoi University of Civil Engineering","job_title":"Human Resources Manager","shirt_size":"M","city":"Bai’e","postal_code":null},
    {"id":25,"first_name":"Erasmus","last_name":"Wyd","email":"ewydo@studiopress.com","gender":"Male","ip_address":"179.142.145.132","university":"Instituto Politécnico Nacional, Campus Guanajuato","job_title":"Computer Systems Analyst IV","shirt_size":"XL","city":"Uspenka","postal_code":null},
    {"id":26,"first_name":"Mathew","last_name":"Breeder","email":"mbreederp@istockphoto.com","gender":"Male","ip_address":"26.254.46.34","university":"Bangkok University","job_title":"Sales Representative","shirt_size":"2XL","city":"Kadubetara","postal_code":null},
    {"id":27,"first_name":"Ashlin","last_name":"Tribbeck","email":"atribbeckq@chron.com","gender":"Male","ip_address":"214.248.34.228","university":"Bunka Women's University","job_title":"Executive Secretary","shirt_size":"2XL","city":"Debre Sīna","postal_code":null},
    {"id":28,"first_name":"Brady","last_name":"Richings","email":"brichingsr@mashable.com","gender":"Male","ip_address":"166.246.65.10","university":"Université de Blida","job_title":"Health Coach II","shirt_size":"XL","city":"Oeleon","postal_code":null},
    {"id":29,"first_name":"Alva","last_name":"Ayars","email":"aayarss@usda.gov","gender":"Male","ip_address":"95.18.146.176","university":"Pes University","job_title":"Staff Scientist","shirt_size":"L","city":"Bromma","postal_code":"161 26"},
    {"id":30,"first_name":"Art","last_name":"Loude","email":"aloudet@wp.com","gender":"Male","ip_address":"187.118.85.192","university":"Reinhardt College","job_title":"Registered Nurse","shirt_size":"3XL","city":"Guacarí","postal_code":"763508"},
    {"id":31,"first_name":"Dorthea","last_name":"McCamish","email":"dmccamishu@newsvine.com","gender":"Female","ip_address":"23.41.218.1","university":"Cubidor University Switzerland","job_title":"Developer II","shirt_size":"3XL","city":"Jetis","postal_code":null},
    {"id":32,"first_name":"Winnie","last_name":"Fetteplace","email":"wfetteplacev@scribd.com","gender":"Male","ip_address":"253.112.248.123","university":"Université de Caen Basse Normandie","job_title":"Programmer Analyst III","shirt_size":"M","city":"Nowy Duninów","postal_code":"09-505"},
    {"id":33,"first_name":"Christos","last_name":"Hanfrey","email":"chanfreyw@mapquest.com","gender":"Male","ip_address":"187.95.89.28","university":"American University of Antigua","job_title":"Community Outreach Specialist","shirt_size":"S","city":"Kłoczew","postal_code":"08-550"},
    {"id":34,"first_name":"Aviva","last_name":"Latehouse","email":"alatehousex@usda.gov","gender":"Female","ip_address":"132.149.56.195","university":"Manipur University","job_title":"VP Quality Control","shirt_size":"3XL","city":"Laguna Paiva","postal_code":"3401"},
    {"id":35,"first_name":"Enriqueta","last_name":"Gooderham","email":"egooderhamy@com.com","gender":"Female","ip_address":"94.227.233.82","university":"Al Rafidain University College","job_title":"Research Assistant I","shirt_size":"2XL","city":"Huangqiao","postal_code":null},
    {"id":36,"first_name":"Merrile","last_name":"Dibb","email":"mdibbz@myspace.com","gender":"Female","ip_address":"62.209.2.240","university":"Kuching Polytechnic","job_title":"Help Desk Operator","shirt_size":"S","city":"Clisson","postal_code":"44194 CEDEX"},
    {"id":37,"first_name":"Darya","last_name":"McCool","email":"dmccool10@geocities.jp","gender":"Female","ip_address":"149.117.119.39","university":"Jingdezhen China Institute","job_title":"Computer Systems Analyst IV","shirt_size":"L","city":"Obiaruku Quarters","postal_code":null},
    {"id":38,"first_name":"Tamqrah","last_name":"Hayer","email":"thayer11@sciencedaily.com","gender":"Female","ip_address":"166.160.74.255","university":"Josai International University","job_title":"Developer II","shirt_size":"XS","city":"Kanal","postal_code":"5213"},
    {"id":39,"first_name":"Putnem","last_name":"Grimsdale","email":"pgrimsdale12@accuweather.com","gender":"Male","ip_address":"198.1.209.189","university":"Cleary College","job_title":"Recruiter","shirt_size":"S","city":"Benešov","postal_code":"679 53"},
    {"id":40,"first_name":"Tresa","last_name":"Tuckett","email":"ttuckett13@auda.org.au","gender":"Female","ip_address":"196.197.173.43","university":"St. Vincent College","job_title":"Account Executive","shirt_size":"L","city":"Yantan","postal_code":null}];

  selectedUsers: User[];
  onToggleSelectedItems: Subject<boolean> = new Subject();

  constructor() {
    this._data.forEach((datum: {
                        id: string,
                        first_name: string,
                        last_name: string,
                        email: string,
                        gender: string,
                        ip_address: string,
                        university: string,
                        job_title: string,
                        shirt_size: string,
                        city: string,
                        postal_code: string}) => {this._users.push(new User(datum))});    
                        
  }

  get data(): User[] {
    return this._users;
  }

  onSelectAllToggled(select_all: boolean) {
    if (select_all) {
      this.selectedUsers = [];
      this.data.forEach((user: User) => {
        this.selectedUsers.push(user);
      });
    } else {
      this.selectedUsers = [];
    }
    this.onToggleSelectedItems.next(this.selectedUsers.length > 0);
  }

  getSelectedItemIndex(id: string): number {
    return this.selectedUsers.findIndex((user: User) => {return user.id === id; });
  }

  getDataItemIndex(id: string): number {
    return this._users.findIndex((user: User) => {return user.id === id; });
  }  

  onSelectItem(id: string) {
    const ix = this.getSelectedItemIndex(id);
    if (ix === -1) {
      this.selectedUsers.push(this._users[this.getDataItemIndex(id)]);
    }
  }

  onDeselectItem(id: string) {
    const ix = this.getSelectedItemIndex(id);
    if (ix > -1) {
      this.selectedUsers.splice(ix, 1);
    }
  }  

}
