import UIKit

class ViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    
    @IBOutlet weak var todoTableView: UITableView!
    
    var todos: [String] = ["EC601 miniproject3"]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        todoTableView.delegate = self
        todoTableView.dataSource = self
        todoTableView.rowHeight = 80
    }
    
    
    
    @IBAction func addTodo(_ sender: Any) {
        
        let todoAlert = UIAlertController(title: "Creat a new event", message: "add a new todo", preferredStyle: .alert)
        
        todoAlert.addTextField()
        
        let addTodoAction = UIAlertAction(title: "Add", style: .default) { (action) in
            let newTodo = todoAlert.textFields![0]
            self.todos.append(newTodo.text!)
            self.todoTableView.reloadData()
        }
        
        let cancelAction = UIAlertAction(title: "Cancel", style: .default)
        
        todoAlert.addAction(addTodoAction)
        todoAlert.addAction(cancelAction)
        
        present(todoAlert, animated: true, completion: nil)
        
        
    }
    
    
    func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return todos.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        let cell = tableView.dequeueReusableCell(withIdentifier: "todoCell", for: indexPath) as! TodoCell
        
        cell.todoLabel.text = todos[indexPath.row]
        
        return cell
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let cell = tableView.cellForRow(at: indexPath) as! TodoCell
        
        if cell.isChecked == false {
            cell.checkmarkImage.image = UIImage(named: "checkmark.png")
            cell.isChecked = true
        }
        else {
            cell.checkmarkImage.image = nil
            cell.isChecked = false
        }
        
    }
    
    func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCell.EditingStyle, forRowAt indexPath: IndexPath) {
        
        if editingStyle == .delete {
            todos.remove(at: indexPath.row)
            todoTableView.reloadData()
        }
    }

}

