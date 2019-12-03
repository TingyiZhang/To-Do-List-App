import UIKit

class TodoCell: UITableViewCell {

    @IBOutlet weak var todoLabel: UILabel!
    
    @IBOutlet weak var checkmarkImage: UIImageView!
    
    var isChecked = false
    
    override func awakeFromNib() {
        super.awakeFromNib()
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
    }

}
