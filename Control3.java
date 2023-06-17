package com.example.demo.Sample.Controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.Sample.models.Model3;
import com.example.demo.Sample.repositories.Repo3;
import com.example.demo.Sample.repositories.Repos2;
@Controller
@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/star")


public class Control3 {
	@Autowired
	Repo3 rep;
	@PostMapping("/stu")
	public String mthd1(@RequestBody Model3 dm)
	{
		rep.save(dm);
		return "saved";

}
	@GetMapping("/gm")
	List<Model3> getdata(){
	return rep.findAll(); 
	 
	}
	@PutMapping("/edi/{name}")
	public String editdata
	(@PathVariable String name,@RequestBody Model3 k) 
	{
	 Model3 m=rep.findById(name).get();
	 if(m!=null) {
	
	m.setUsername(k.getUsername());
	m.setAge(k.getAge());
	m.setGender(k.getGender());
	m.setContact(k.getContact());
	m.setAddress(k.getAddress());
	rep.save(m);
	return "Updated";
	}
	else {
	return "no update";
	 }
	}
	@DeleteMapping("/delete/{username}")
	public String deletedata(@PathVariable String username) 
	{
	rep.deleteById(username);
	return "Deleted";
	}
}
