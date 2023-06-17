package com.example.demo.Sample.models;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="contacts")

public class Model4 {
	@Id
	String username;
	String arrival;
	String departure;
	String departuredate;
	String arrivaldate;
	String departureflight;
	String arrivalflight;
	int passengers;
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getArrival() {
		return arrival;
	}
	public void setArrival(String arrival) {
		this.arrival = arrival;
	}
	public String getDeparture() {
		return departure;
	}
	public void setDeparture(String departure) {
		this.departure = departure;
	}
	public String getDeparturedate() {
		return departuredate;
	}
	public void setDeparturedate(String departuredate) {
		this.departuredate = departuredate;
	}
	public String getArrivaldate() {
		return arrivaldate;
	}
	public void setArrivaldate(String arrivaldate) {
		this.arrivaldate = arrivaldate;
	}
	public String getDepartureflight() {
		return departureflight;
	}
	public void setDepartureflight(String departureflight) {
		this.departureflight = departureflight;
	}
	public String getArrivalflight() {
		return arrivalflight;
	}
	public void setArrivalflight(String arrivalflight) {
		this.arrivalflight = arrivalflight;
	}
	public int getPassengers() {
		return passengers;
	}
	public void setPassengers(int passengers) {
		this.passengers = passengers;
	}
}