package item;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item,Long> {

    @Query("select a from Item a join a.order b where b.orderNum = ?1")
    public List<Item> findItemByOrderNum(String orderNum);

    @Query("select a from Item a join fetch a.order where a.id = ?1")
    public Item findItem(String orderNum);
}
