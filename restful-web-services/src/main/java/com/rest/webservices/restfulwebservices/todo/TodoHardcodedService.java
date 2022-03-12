package com.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
	
	//ArrayList will act as a db
	private static List<Todo> todos = new ArrayList<Todo>();
	private static int idCounter = 0;
	
	
	static {
		todos.add(new Todo(++idCounter, "IndiaPaleAle", "Learn Java", new Date(), false));
		todos.add(new Todo(++idCounter, "IndiaPaleAle", "Learn React", new Date(), false));
		todos.add(new Todo(++idCounter, "IndiaPaleAle", "Learn Microservices", new Date(), false));
	}
	
	public List<Todo> findAll(){
		return todos;
	}

}
