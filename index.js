//----------- objects creation with braces-----------------------//


const ob={
    Rollno:38,
    Name:"Srisubiksha",
    Dept:"Ece",
    Type:"goodgirl",
    College:"Skct",
    Interest:"Novels",
    getRollno:function(){
      return this.Rollno;
    },
    setRollno:function(Rollno){
     this.Rollno=Rollno;
    },
    getName:function(){
      return this.Name;
    },
    setName:function(Name){
     this.Name=Name;
    },
     getDept:function(){
      return this.Dept;
    },
    setDept:function(Dept){
     this.Dept=Dept;
    },
     getType:function(){
      return this.Type;
    },
    setType:function(Type){
     this.Type=Type;
    },
     getCollege:function(){
      return this.College;
    },
    setCollege:function(College){
     this.College=College;
    },
     getInterest:function(){
      return this.Interest;
    },
    setInterest:function(Interest){
     this.Interest=Interest;
    },
}
let Rollno=ob.getRollno();
console.log("Rollno",Rollno);
ob.setRollno(15);
Rollno=ob.getRollno();
console.log("Rollno",Rollno);
let Name=ob.getName();
console.log("Name",Name);
ob.setName("Srisubiksha Balachandar");
Name=ob.getName();
console.log("Name",Name);
let Dept=ob.getDept();
console.log("Dept",Dept);
ob.setDept("Mech");
Dept=ob.getDept();
console.log("Dept",Dept);
let Type=ob.getType();
console.log("Type",Type);
ob.setType("Very Good Girl");
Type=ob.getType();
console.log("Type",Type);
let College=ob.getCollege();
console.log("College",College);
ob.setCollege("Sri Krishna College of Technology");
College=ob.getCollege();
console.log("College",College);
let Interest=ob.getInterest();
console.log("Interest",Interest);
ob.setInterest("Sidney sheldon novels");
Interest=ob.getInterest();
console.log("Interest",Interest);
