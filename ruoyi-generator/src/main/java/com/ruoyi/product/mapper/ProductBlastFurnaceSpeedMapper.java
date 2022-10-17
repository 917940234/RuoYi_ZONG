package com.ruoyi.product.mapper;

import java.util.List;
import com.ruoyi.product.domain.ProductBlastFurnaceSpeed;

/**
 * 出铁流速预报Mapper接口
 * 
 * @author zongyoucheng
 * @date 2022-10-11
 */
public interface ProductBlastFurnaceSpeedMapper 
{
    /**
     * 查询出铁流速预报
     * 
     * @param blastFurnaceSpeedId 出铁流速预报主键
     * @return 出铁流速预报
     */
    public ProductBlastFurnaceSpeed selectProductBlastFurnaceSpeedByBlastFurnaceSpeedId(Long blastFurnaceSpeedId);

    /**
     * 查询出铁流速预报列表
     * 
     * @param productBlastFurnaceSpeed 出铁流速预报
     * @return 出铁流速预报集合
     */
    public List<ProductBlastFurnaceSpeed> selectProductBlastFurnaceSpeedList(ProductBlastFurnaceSpeed productBlastFurnaceSpeed);

    /**
     * 新增出铁流速预报
     * 
     * @param productBlastFurnaceSpeed 出铁流速预报
     * @return 结果
     */
    public int insertProductBlastFurnaceSpeed(ProductBlastFurnaceSpeed productBlastFurnaceSpeed);

    /**
     * 修改出铁流速预报
     * 
     * @param productBlastFurnaceSpeed 出铁流速预报
     * @return 结果
     */
    public int updateProductBlastFurnaceSpeed(ProductBlastFurnaceSpeed productBlastFurnaceSpeed);

    /**
     * 删除出铁流速预报
     * 
     * @param blastFurnaceSpeedId 出铁流速预报主键
     * @return 结果
     */
    public int deleteProductBlastFurnaceSpeedByBlastFurnaceSpeedId(Long blastFurnaceSpeedId);

    /**
     * 批量删除出铁流速预报
     * 
     * @param blastFurnaceSpeedIds 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteProductBlastFurnaceSpeedByBlastFurnaceSpeedIds(String[] blastFurnaceSpeedIds);
}
