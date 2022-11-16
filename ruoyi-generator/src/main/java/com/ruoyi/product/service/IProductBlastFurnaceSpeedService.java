package com.ruoyi.product.service;

import java.util.List;
import com.ruoyi.product.domain.ProductBlastFurnaceSpeed;

/**
 * 出铁流速流量预报Service接口
 * 
 * @author zongyoucheng
 * @date 2022-11-26
 */
public interface IProductBlastFurnaceSpeedService 
{
    /**
     * 查询出铁流速流量预报
     * 
     * @param blastFurnaceSpeedId 出铁流速流量预报主键
     * @return 出铁流速流量预报
     */
    public ProductBlastFurnaceSpeed selectProductBlastFurnaceSpeedByBlastFurnaceSpeedId(Long blastFurnaceSpeedId);

    /**
     * 查询出铁流速流量预报列表
     * 
     * @param productBlastFurnaceSpeed 出铁流速流量预报
     * @return 出铁流速流量预报集合
     */
    public List<ProductBlastFurnaceSpeed> selectProductBlastFurnaceSpeedList(ProductBlastFurnaceSpeed productBlastFurnaceSpeed);

    /**
     * 新增出铁流速流量预报
     * 
     * @param productBlastFurnaceSpeed 出铁流速流量预报
     * @return 结果
     */
    public int insertProductBlastFurnaceSpeed(ProductBlastFurnaceSpeed productBlastFurnaceSpeed);

    /**
     * 修改出铁流速流量预报
     * 
     * @param productBlastFurnaceSpeed 出铁流速流量预报
     * @return 结果
     */
    public int updateProductBlastFurnaceSpeed(ProductBlastFurnaceSpeed productBlastFurnaceSpeed);

    /**
     * 批量删除出铁流速流量预报
     * 
     * @param blastFurnaceSpeedIds 需要删除的出铁流速流量预报主键集合
     * @return 结果
     */
    public int deleteProductBlastFurnaceSpeedByBlastFurnaceSpeedIds(String blastFurnaceSpeedIds);

    /**
     * 删除出铁流速流量预报信息
     * 
     * @param blastFurnaceSpeedId 出铁流速流量预报主键
     * @return 结果
     */
    public int deleteProductBlastFurnaceSpeedByBlastFurnaceSpeedId(Long blastFurnaceSpeedId);
}
