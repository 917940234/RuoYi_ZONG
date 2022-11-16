package com.ruoyi.product.service;

import java.util.List;
import com.ruoyi.product.domain.ProductBlastFurnaceWeight;

/**
 * 出铁重量计量Service接口
 * 
 * @author zongyoucheng
 * @date 2022-11-26
 */
public interface IProductBlastFurnaceWeightService 
{
    /**
     * 查询出铁重量计量
     * 
     * @param blastFurnaceWeightId 出铁重量计量主键
     * @return 出铁重量计量
     */
    public ProductBlastFurnaceWeight selectProductBlastFurnaceWeightByBlastFurnaceWeightId(Long blastFurnaceWeightId);

    /**
     * 查询出铁重量计量列表
     * 
     * @param productBlastFurnaceWeight 出铁重量计量
     * @return 出铁重量计量集合
     */
    public List<ProductBlastFurnaceWeight> selectProductBlastFurnaceWeightList(ProductBlastFurnaceWeight productBlastFurnaceWeight);

    /**
     * 新增出铁重量计量
     * 
     * @param productBlastFurnaceWeight 出铁重量计量
     * @return 结果
     */
    public int insertProductBlastFurnaceWeight(ProductBlastFurnaceWeight productBlastFurnaceWeight);

    /**
     * 修改出铁重量计量
     * 
     * @param productBlastFurnaceWeight 出铁重量计量
     * @return 结果
     */
    public int updateProductBlastFurnaceWeight(ProductBlastFurnaceWeight productBlastFurnaceWeight);

    /**
     * 批量删除出铁重量计量
     * 
     * @param blastFurnaceWeightIds 需要删除的出铁重量计量主键集合
     * @return 结果
     */
    public int deleteProductBlastFurnaceWeightByBlastFurnaceWeightIds(String blastFurnaceWeightIds);

    /**
     * 删除出铁重量计量信息
     * 
     * @param blastFurnaceWeightId 出铁重量计量主键
     * @return 结果
     */
    public int deleteProductBlastFurnaceWeightByBlastFurnaceWeightId(Long blastFurnaceWeightId);
}
